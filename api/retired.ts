import { retiredResponse } from "../app/retirement";

type VercelResponse = {
  status: (statusCode: number) => VercelResponse;
  setHeader: (name: string, value: string) => void;
  send: (body: string) => void;
};

export default async function handler(
  _request: unknown,
  response: VercelResponse
) {
  const gone = retiredResponse();

  response.status(gone.status);
  gone.headers.forEach((value, name) => {
    response.setHeader(name, value);
  });
  response.send(await gone.text());
}
