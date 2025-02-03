import { db } from "@/database";
import { userSchema, NewUser, User } from "@/database/schema/users";
import { eq } from "drizzle-orm";

export const UserService = {
  getAllUsers: async (): Promise<User[]> => {
    try {
      return await db.select().from(userSchema);
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch users");
    }
  },

  createUser: async (userData: NewUser): Promise<NewUser> => {
    try {
      const [newUser] = await db
        .insert(userSchema)
        .values(userData)
        .returning();
      return newUser;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to create user");
    }
  },

  getUserById: async (userId: string): Promise<User | undefined> => {
    try {
      const [user] = await db
        .select()
        .from(userSchema)
        .where(eq(userSchema.id, Number(userId)));
      console.log(user);
      return user;
    } catch (error) {
      console.log(error);

      throw new Error("Failed to fetch user");
    }
  },

  updateUser: async (
    userId: string,
    updateData: Partial<User>,
  ): Promise<User> => {
    try {
      const [updatedUser] = await db
        .update(userSchema)
        .set(updateData)
        .where(eq(userSchema.id, Number(userId)))
        .returning();
      return updatedUser;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to update user");
    }
  },

  deleteUser: async (userId: string): Promise<void> => {
    try {
      await db.delete(userSchema).where(eq(userSchema.id, Number(userId)));
    } catch (error) {
      console.log(error);
      throw new Error("Failed to delete user");
    }
  },
};
