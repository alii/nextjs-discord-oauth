import { GetServerSideProps } from "next";
import { DiscordUser } from "../utils/types";
import { parseUser } from "../utils/parse-user";

type Props = { user: DiscordUser | null };

export default function Index(props: Props) {
  if (!props.user) {
    return <p>You are being redirected.</p>;
  }

  return (
    <h1>
      Hey, {props.user.username}#{props.user.discriminator}
    </h1>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async function (
  ctx
) {
  const user = parseUser(ctx);

  if (!user) {
    ctx.res.statusCode = 307;
    ctx.res.setHeader("Location", "/api/oauth");
    ctx.res.end();
  }

  return { props: { user } };
};
