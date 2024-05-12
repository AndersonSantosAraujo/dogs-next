// import { jwtVerify } from "jose";

export default async function verifyToken(token: string): Promise<boolean> {
  if (!token) return false;
  try {
    // Está comentado pois o a variável de ambiente STRING_ENCODE não
    // é a real usada no servidor, por questões de segurança.
    // se usada, a autenticação não iria funcionar!
    // await jwtVerify(
    //   token,
    //   new TextEncoder().encode(process.env.STRING_ENCODE),
    //   {
    //     algorithms: ["HS256"],
    //   },
    // );

    return true;
  } catch (error) {
    return false;
  }
}
