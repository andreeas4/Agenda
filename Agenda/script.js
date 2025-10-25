document.addEventListener('DOMContentLoaded', function() {
    // ----------------------------------------------------
    // LOGICA DARK MODE (Switch)
    // ----------------------------------------------------
    const toggleSwitch = document.getElementById('toggle');
    const bodyElement = document.body;
    
    if (toggleSwitch) {
        toggleSwitch.addEventListener('change', function() {
            bodyElement.classList.toggle('dark-mode', this.checked);
            
        });
    }


    // ----------------------------------------------------
    // LOGICA TABELULUI (Ștergere și Total)
    // ----------------------------------------------------
    const tableBody = document.getElementById('agenda-body'); 
    const totalCell = document.getElementById('total-persons');
    
    
   function updateTotalCount() {
   
    const allRows = tableBody.querySelectorAll('tr');
    const rowCount = allRows.length; 
    
    const actualCount = rowCount > 0 ? rowCount : 0; 
    
    totalCell.textContent = `Total persoane: ${actualCount}`;
}
    
    // Funcția care gestionează click-ul pe butonul Delete
    function handleDeleteClick(event) {
        if (event.target.classList.contains('delete-btn')) {
            event.preventDefault(); 
            const rowToDelete = event.target.closest('tr');
            
            if (rowToDelete) {
                rowToDelete.remove();
                updateTotalCount(); 
            }
        }
    }

    if (tableBody) {
        tableBody.addEventListener('click', handleDeleteClick);
        updateTotalCount(); // Rulează la încărcarea paginii
    }
    // ----------------------------------------------------
// LOGICA FORMULARULUI (Adăugare Rând)
// ----------------------------------------------------
const addPersonForm = document.getElementById('add-person-form'); 
const lastNameInput = document.getElementById('lastNameInput');
const firstNameInput = document.getElementById('firstNameInput');
const phoneInput = document.getElementById('phoneInput');

if (addPersonForm) {
    addPersonForm.addEventListener('submit', function(event) {
        // Oprește reîncărcarea paginii la submit
        event.preventDefault(); 

        const lastName = lastNameInput.value.trim();
        const firstName = firstNameInput.value.trim();
        const phoneNumber = phoneInput.value.trim();

        if (lastName && firstName && phoneNumber) {
            
            // 1. DECLANȘAREA ANIMAȚIEI: Adaugă clasa de loading pe body
            // Asigură-te că 'bodyElement' este definit în blocul DOMContentLoaded superior
            bodyElement.classList.add('is-loading'); 
            
            // 2. TIMEOUT: Execută adăugarea persoanei după 500ms (durata animației CSS)
            setTimeout(() => {
                
                // --- Operațiuni care se întâmplă DUPĂ animație ---
                createNewRow(lastName, firstName, phoneNumber);
                
                // Resetează formularul
                addPersonForm.reset(); 
                
                // Actualizează totalul
                updateTotalCount(); 
                
                // 3. ELIMINAREA CLASEI: Scoate clasa pentru a reveni la normal
                bodyElement.classList.remove('is-loading');
                
            }, 500); // 500 milisecunde = 0.5s (trebuie să se potrivească cu durata din CSS)

        } else {
            alert("Te rog completează toate câmpurile!");
        }
    });
}

// Funcția care creează și inserează noul rând (rămâne neschimbată)
function createNewRow(lastName, firstName, phoneNumber) {
    const tableBody = document.getElementById('agenda-body'); // Asigură-te că folosești ID-ul tbody corect

    const newRow = document.createElement('tr'); 
    
    newRow.innerHTML = `
        <td>${lastName}</td>
        <td>${firstName}</td>
        <td>${phoneNumber}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    tableBody.appendChild(newRow);
}
});