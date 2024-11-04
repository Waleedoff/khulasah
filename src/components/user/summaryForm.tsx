import { useState } from "react";

export default function SummaryForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [summary, setSummary] = useState(false);
  const [isError, setIsError] = useState(false);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsError(false);
    setIsLoading(true);

    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      const file = formData.get("upload_file") as File;
      const lang = formData.get("lang") === "arabic" ? "ar" : "en";

      // Create the exact format required by the API
      const toSendFormData = new FormData();
      toSendFormData.append("upload_file", file);

      const response = await fetch(
        `https://fastapi-backend-249406031268.me-central1.run.app/demo/summarize_file/${lang}`,
        {
          method: "POST",
          body: toSendFormData,
        },
      );

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const result = await response.json();
      setSummary(result.summary);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full grid place-items-center gap-10 animate-drop-in">
      <h1 className="font-bold text-3xl md:text-4xl text-[#1f1f56] w-screen max-w-fit">
        ارفق الملف المراد{" "}
        <span className="text-[#0c0aff] underline">تخليصه</span>
      </h1>
      <form
        onSubmit={submitHandler}
        className="w-[90%] max-w-[600px] bg-white rounded-xl shadow-lg p-5 gap-7 flex flex-col overflow-hidden"
      >
        {summary && (
          <div className="bg-[#0c0aff] text-white p-5 rounded-xl">
            <h2 className="text-2xl font-bold">الخلاصة</h2>
            <p className="text-lg mt-2 h-64 overflow-y-auto p-2">{summary}</p>
          </div>
        )}
        <div>
          <label htmlFor="upload_file" className="text-lg font-bold ">
            اختر الملف
          </label>
          <div>
            <input
              disabled={isLoading}
              type="file"
              name="upload_file"
              className="mt-2 "
              accept="application/pdf"
              required
            />
          </div>
        </div>
        <div className="">
          <label htmlFor="lang" className="text-lg font-bold">
            اختر اللغة
          </label>
          <div className="mt-2 ">
            <select
              disabled={isLoading}
              name="lang"
              id="lang"
              className="p-2 border rounded-xl"
              required
            >
              <option value="arabic">العربية</option>
              <option value="english">الإنجليزية</option>
            </select>
          </div>
        </div>
        {isLoading ? (
          <div className="w-full grid place-items-center">
            <svg
              viewBox="0 0 800 800"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 animate-spin"
            >
              <circle
                cx="400"
                cy="400"
                fill="none"
                r="200"
                strokeWidth="50"
                stroke="#0C0AFF"
                strokeDasharray="700 1400"
                strokeLinecap="round"
                strokeDashoffset="0"
              />
            </svg>
          </div>
        ) : (
          <div className="w-full grid place-items-center">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#0C0AFF] text-white px-4 py-2 text-1xl font-bold rounded-full transition duration-300 hover:bg-[hsl(240,100%,40%)] disabled:bg-gray-400 disabled:cursor-not-allowed max-w-56 w-full"
              style={{
                boxShadow: "0 4px 6px rgba(4, 3, 76, 0.5)",
              }}
            >
              لخص الملف
            </button>
          </div>
        )}
        {isError && (
          <p className="text-red-500 text-lg font-bold">
            حدث خطأ ما، يرجى المحاولة مرة أخرى
          </p>
        )}
      </form>
    </section>
  );
}
