const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

function parseXML(xmlString) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, "text/xml");
  const students = xmlDoc.getElementsByTagName("student");
  const result = {
    list: [],
  };
  for (let student of students) {
    const nameElement = student.getElementsByTagName("name")[0];
    const firstName = student.getElementsByTagName("first")[0].textContent;
    const secondName = student.getElementsByTagName("second")[0].textContent;
    const age = parseInt(student.getElementsByTagName("age")[0].textContent);
    const prof = student.getElementsByTagName("prof")[0].textContent;
    const lang = nameElement.getAttribute("lang");

    result.list.push({
      name: `${firstName} ${secondName}`,
      age: age,
      prof: prof,
      lang: lang,
    });
  }
  return result;
}

const result = parseXML(xmlString);
console.log(result);
