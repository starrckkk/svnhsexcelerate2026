// techniques.js
const techniquesData = [
  // ====== Data Entry & Basics (17) ======
  {
    title: "Keyboard shortcuts for navigation",
    content: "Use arrow keys for cell movement, Ctrl+Arrow to jump to ends, Home/ Ctrl+Home to navigate rows and sheet."
  },
  {
    title: "AutoFill for repetitive data",
    content: "Enter initial value, drag the fill handle (+) to auto-populate series like numbers, dates, or custom lists."
  },
  {
    title: "Flash Fill",
    content: "Automatically format or extract data patterns by typing an example and pressing Ctrl+E."
  },
  {
    title: "Data validation dropdowns",
    content: "Use Data → Data Validation → List to restrict input and create dropdowns for consistent data entry."
  },
  {
    title: "Find & Replace efficiently",
    content: "Press Ctrl+F to find and Ctrl+H to replace. Use options to match case or entire cell contents."
  },
  {
    title: "Remove duplicates",
    content: "Data → Remove Duplicates to clean repeated entries and maintain data integrity."
  },
  {
    title: "Freeze panes",
    content: "View → Freeze Panes to lock headers while scrolling through large data sets."
  },
  {
    title: "Split text to columns",
    content: "Data → Text to Columns allows separating data by delimiter or fixed width."
  },
  {
    title: "Format as Table",
    content: "Select data → Home → Format as Table to enable sorting, filtering, and structured references."
  },
  {
    title: "Quick cell formatting",
    content: "Use Ctrl+B/I/U for bold/italic/underline. Right-click → Format Cells for numbers, dates, alignment."
  },
  {
    title: "Insert comments / notes",
    content: "Review → New Comment to annotate cells for collaboration or reminders."
  },
  {
    title: "Named ranges",
    content: "Formulas → Name Manager or select cells → define name to simplify formulas and navigation."
  },
  {
    title: "Quick copy / move cells",
    content: "Ctrl+C / Ctrl+X to copy or move. Ctrl+Drag to copy without overwriting."
  },
  {
    title: "Undo / Redo",
    content: "Ctrl+Z to undo, Ctrl+Y to redo multiple steps for safe editing."
  },
  {
    title: "Insert / Delete rows or columns",
    content: "Right-click row/column → Insert/Delete. Ctrl+Shift + '+' or '-' as shortcuts."
  },
  {
    title: "Quick sum / average",
    content: "Select numbers → AutoSum button or Alt+= to quickly calculate sum, average, or other functions."
  },
  {
    title: "Quick navigation with Go To",
    content: "Ctrl+G or F5 → enter cell reference or named range to jump instantly."
  },

  // ====== Formulas & Calculations (18) ======
  {
    title: "SUM, AVERAGE, MIN, MAX",
    content: "Basic aggregate formulas: =SUM(A1:A10), =AVERAGE(A1:A10), =MIN(A1:A10), =MAX(A1:A10)."
  },
  {
    title: "IF formula for conditions",
    content: "=IF(A1>10,'Yes','No') to perform conditional checks."
  },
  {
    title: "Nested IFs",
    content: "Use multiple IFs: =IF(A1>10,'High',IF(A1>5,'Medium','Low'))."
  },
  {
    title: "VLOOKUP / HLOOKUP",
    content: "Search tables: =VLOOKUP(lookup_value, table_array, col_index, FALSE) for vertical lookup."
  },
  {
    title: "XLOOKUP",
    content: "Modern lookup: =XLOOKUP(lookup_value, lookup_array, return_array, 'Not found')."
  },
  {
    title: "INDEX + MATCH",
    content: "Flexible lookups: =INDEX(return_range, MATCH(lookup_value, lookup_range,0))."
  },
  {
    title: "COUNT, COUNTA, COUNTIF, COUNTIFS",
    content: "Count cells with numbers / non-empty / conditional counting."
  },
  {
    title: "SUMIF / SUMIFS",
    content: "Conditional sums: =SUMIF(range, criteria, sum_range)."
  },
  {
    title: "TEXT functions (LEFT, RIGHT, MID)",
    content: "Extract parts of text: =LEFT(A1,3), =RIGHT(A1,2), =MID(A1,2,4)."
  },
  {
    title: "CONCAT / CONCATENATE / TEXTJOIN",
    content: "Combine text: =CONCAT(A1,B1), =TEXTJOIN(', ',TRUE,A1:C1)."
  },
  {
    title: "ROUND, ROUNDUP, ROUNDDOWN",
    content: "Adjust number precision: =ROUND(A1,2), =ROUNDUP(A1,0), =ROUNDDOWN(A1,0)."
  },
  {
    title: "PMT formula (Loan calculation)",
    content: "=PMT(rate, nper, pv) to calculate loan payments."
  },
  {
    title: "ABS formula",
    content: "=ABS(A1) returns absolute value."
  },
  {
    title: "PROPER, UPPER, LOWER",
    content: "Adjust text case: =PROPER(A1), =UPPER(A1), =LOWER(A1)."
  },
  {
    title: "TODAY, NOW",
    content: "Return current date / date & time: =TODAY(), =NOW()."
  },
  {
    title: "ROUND with IF for conditional rounding",
    content: "Example: =IF(A1>100,ROUND(A1,0),A1)."
  },
  {
    title: "CHOOSE formula",
    content: "=CHOOSE(2,'Apple','Banana','Cherry') returns Banana."
  },
  {
    title: "RAND / RANDBETWEEN",
    content: "Generate random numbers: =RAND() for 0-1, =RANDBETWEEN(1,100)."
  },

  // ====== Analysis & Visualization (17) ======
  {
    title: "Conditional formatting",
    content: "Highlight cells based on criteria: Home → Conditional Formatting → Rules."
  },
  {
    title: "Insert charts (Column, Line, Pie)",
    content: "Insert → Chart → choose type. Customize titles, axis, colors."
  },
  {
    title: "Pivot Tables",
    content: "Insert → PivotTable to summarize large data sets quickly."
  },
  {
    title: "Pivot Charts",
    content: "Analyze PivotTable visually: PivotTable Analyze → PivotChart."
  },
  {
    title: "Sparklines",
    content: "Insert → Sparklines to show trends in small cell charts."
  },
  {
    title: "Goal Seek",
    content: "Data → What-If Analysis → Goal Seek to find input for desired output."
  },
  {
    title: "Scenario Manager",
    content: "Data → What-If Analysis → Scenario Manager to compare multiple scenarios."
  },
  {
    title: "Data Tables",
    content: "Data → What-If Analysis → Data Table to analyze multiple input variations."
  },
  {
    title: "Forecast Sheet",
    content: "Data → Forecast Sheet to predict future trends from historical data."
  },
  {
    title: "Histogram (Analysis ToolPak)",
    content: "Data → Data Analysis → Histogram for frequency distribution."
  },
  {
    title: "Descriptive Statistics",
    content: "Data → Data Analysis → Descriptive Statistics to get mean, median, std. dev."
  },
  {
    title: "Correlation Analysis",
    content: "Data → Data Analysis → Correlation to measure relationships between variables."
  },
  {
    title: "Combo Charts",
    content: "Combine multiple chart types to compare series: right-click → Change Chart Type → Combo."
  },
  {
    title: "Dynamic Named Ranges for charts",
    content: "Use OFFSET + COUNTA to create ranges that automatically expand for charts."
  },
  {
    title: "Advanced Filtering",
    content: "Data → Advanced to filter using complex criteria or copy results elsewhere."
  },
  {
    title: "Conditional Charts",
    content: "Highlight or format chart series based on rules using helper series or conditional formatting."
  },
  {
    title: "Pivot Table Slicers",
    content: "Insert → Slicer to filter PivotTable data interactively."
  },
  {
    title: "Raisa",
    content: "Masarap"
  },
  {
    title: "Doc Arcee",
    content: "bbgirl"
  },
  {
    title: "Lani",
    content: "Chinay"
  },
];
