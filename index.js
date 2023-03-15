(function() {
    // Fill personal information
    const myself = [
      { about: "Name", value: "Vandana Arora" },
      { about: "Age", value: "21" },
      { about: "DOB", value: "7-Jun-2001" },
      { about: "Email", value: "aroravandana234@gmail.com" },
      { about: "Company", value: "Gemini Solutions Pvt Ltd." }
    ];
    

    // Create table element
    const table = document.createElement("table");
    table.style.borderCollapse = "collapse";
  
    const headLine = document.createElement("tr");
    for (let i = 0; i < 5 ; i++) {
      const headCell = document.createElement("th");
      headCell.style.border = "1px solid black";
      headCell.style.fontWeight = '400';
      headCell.style.fontSize = '2rem';
      headCell.style.padding = "1rem";
      headCell.style.textAlign = 'center';
      const textCell = document.createTextNode(myself[i].about);
      headCell.appendChild(textCell);
      headLine.appendChild(headCell);
    }
    table.appendChild(headLine);
  
    // Create table rows
    
    for (let i = 0; i < 5; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j < 5; j++) {
        const col = document.createElement("td");
        col.style.border = "1px solid black";
        col.style.padding = "1rem";
        col.style.fontSize = '15px';
        col.style.textAlign = 'center';
        const textCell = document.createTextNode( myself[j].value);
        col.appendChild(textCell);
        row.appendChild(col);
      }
      table.appendChild(row);
    }
  
    // Add table to the document
    document.body.appendChild(table);
})();