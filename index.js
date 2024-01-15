// Mettre input start_date à ajd + minimum à ajd
const today = new Date().toISOString().split("T")[0];
start_date.value = today;
start_date.min = today;

// Mettre input end_date à demain + minimum à demain
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
end_date.value = tomorrow.toISOString().split("T")[0];
end_date.min = tomorrow.toISOString().split("T")[0];

// Faire en sorte que end_date soit tjrs > start_date
start_date.addEventListener("change", (e) => {
  let newEndDay = new Date(e.target.value);

  if (end_date.value < start_date.value) {
    newEndDay.setDate(newEndDay.getDate() + 1);
    end_date.value = newEndDay.toISOString().split("T")[0];
  }
});

// Faire en sorte que si end_date < start_date, on change start_date en end_date - 1 jour
end_date.addEventListener("change", (e) => {
  let newStartDay = new Date(e.target.value);

  if (end_date.value < start_date.value) {
    newStartDay.setDate(newStartDay.getDate() - 1);
    start_date.value = newStartDay.toISOString().split("T")[0];
  }
});

function calcTotal() {
  // Calculer la différence entre les dates
  let diffTime = Math.abs(
    new Date(end_date.value) - new Date(start_date.value)
  );
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // Calculer le prix total
  const nightPrix = nightPrice.textContent;
  total.textContent = nightPrix * diffDays;
}

validation.addEventListener("click", () => {
  calcTotal();
});
