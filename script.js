const button = document.getElementById("generate");
const output = document.getElementById("output");

button.addEventListener("click", async () => {
  const prompt = document.getElementById("prompt").value;

  output.textContent = "Loading...";

  try {
    const response = await fetch(
      "https://sainvisma-backend-nedq.vercel.app/api/gemini",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
      }
    );

    const data = await response.json();
    output.textContent = data.text || "Tidak ada respon";

  } catch (err) {
    output.textContent = "Terjadi error";
    console.error(err);
  }
});
