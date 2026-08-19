import {
  retirementMessage,
  retirementTitle,
} from "../retirement";

type RetiredPageProps = {
  status?: number;
  statusText?: string;
};

export default function RetiredPage({
  status = 410,
  statusText = "Gone",
}: RetiredPageProps) {
  return (
    <section className="max-w-xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-400">
        {status} {statusText}
      </p>
      <h1 className="mt-4 text-3xl font-semibold text-white">
        {retirementTitle}
      </h1>
      <p className="mt-4 text-base leading-7 text-neutral-300">
        {retirementMessage}
      </p>
    </section>
  );
}
