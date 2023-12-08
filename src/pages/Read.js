const datas = [];
const columns = ["Date", "Hotel", "Name", "Peoples", "time"];

const url =
  "https://socialsipproject-default-rtdb.firebaseio.com/userRecords.json";

async function fetchData() {
  try {
    const response = await fetch(url);

    if (response.status === 200) {
      const data = await response.json();

      const keys = Object.keys(data);
      for (let i = 0; i < keys.length; i++) {
        datas.push(data[keys[i]]);
      }
      console.log(datas);
    } else {
      console.error(`Error fetching data: ${response.statusText}`);
    }
  } catch (error) {
    console.error(error);
  }
}
fetchData();