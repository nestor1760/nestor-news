import "next-auth";

declare module "next-auth" {
  interface User {
    username: string | null;
  }

  interface Session {
    user: User;
  }

  interface JWT {
    username: string;
  }
}
