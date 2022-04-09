import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";
import { config } from "../../utils/config";

// Get our environment variables
const { cookieName } = config;

export default async (_: NextApiRequest, res: NextApiResponse) => {
	// remove cookie from request header
	res.setHeader("Set-Cookie", [
		serialize(cookieName, "", {
			maxAge: -1,
			path: "/",
		}),
	]);

	res.writeHead(302, { Location: "/" });
	res.end();
};
