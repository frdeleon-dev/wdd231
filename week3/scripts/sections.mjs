export function setSectionSelection(sections) {
  const sectionSelect = document.querySelector("#sectionNumber");
  
  // Limpiamos las opciones previas por seguridad
  sectionSelect.innerHTML = "";

  sections.forEach((section) => {
    const option = document.createElement("option");
    option.value = section.sectionNum; // O section.sectionNumber, según tus datos
    option.textContent = `${section.sectionNum}`;
    sectionSelect.appendChild(option);
  });
}