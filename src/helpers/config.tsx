export class Config {
	public static IS_PROD: boolean = process.env.NEXT_PUBLIC_NODE_ENV === "production";
	public static DOMAIN: string = process.env.NEXT_PUBLIC_DOMAIN ?? "http://localhost:3000";
}
