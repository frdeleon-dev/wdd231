document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);

    const fields = {
        "first-name": params.get("first-name") || "No provided",
        "last-name": params.get("last-name") || "No provided",
        "email": params.get("email") || "No provided",
        "phone": params.get("phone") || "No provided",
        "organization": params.get("organization") || "No provided",
        "timestamp": params.get("timestamp") || "No timestamp recorded"
    };

    for (const [id, value] of Object.entries(fields)) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = value;
        }
    }
});