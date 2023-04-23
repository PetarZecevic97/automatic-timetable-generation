import "./timetable.css"

const timeList = ['', '8:00-9:00', '9:00-10:00', '10:00-11:00', '11:00-12:00', '12:00-13:00', '13:00-14:00', '14:00-15:00', '15:00-16:00', '16:00-17:00', '17:00-18:00', '18:00-19:00', '19:00-20:00', '20:00-21:00']
const colors = ['red', '#0080FF', 'yellow', 'green', 'magenta']
export default function Timetable(props: {items: any[]}) {
  console.log('items', props.items)
  const tableData = new Array<Array<any>>();
  for (let x = 0; x <=4; x++){
    let row:any[]  = new Array<any>();      
      for (let y = 0; y <= 12; y++) {
      row.push([]);
    }
    tableData.push(row);
  }
  for(let item of props.items) {
    const x = Math.floor(item.time_slot/13);
    const y = item.time_slot % 13
    item.color = colors[Math.floor(Math.random()*colors.length)]
    for(let i = 0; i < item.duration; i ++) {
      tableData[x][y + i].push(item)
    }
  }
  tableData[0].map((cell) => cell.map((item: any) => console.log(item)))
  return (
    <table style={{width: "100%", margin: "10px"}}>
  <thead>
  <tr>
    {timeList.map((item) => <th>{item}</th>)}
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Ponedeljak</td>
    {tableData[0].map((cell) => <td>{cell.map((item: any) => <div style={{width: "100%", backgroundColor : item.color, marginTop: "5px", marginBottom: "5px"}}>{item.class_full_name} <br/> {item.class} <br/>{item.lecturer} <br/>{item.room} <br/>{item.groups.join(', ')} <br/></div>)}</td>)}
  </tr>
  <tr>
    <td>Utorak</td>
    {tableData[1].map((cell) => <td>{cell.map((item: any) => <div style={{width: "100%", backgroundColor : item.color, marginTop: "5px", marginBottom: "5px"}}>{item.class_full_name} <br/>{item.class} <br/>{item.lecturer} <br/>{item.room} <br/>{item.groups.join(', ')} <br/></div>)}</td>)}
  </tr>
  <tr>
    <td>Sreda</td>
    {tableData[2].map((cell) => <td>{cell.map((item: any) => <div style={{width: "100%", backgroundColor : item.color, marginTop: "5px", marginBottom: "5px"}}>{item.class_full_name} <br/>{item.class} <br/>{item.lecturer} <br/>{item.room} <br/>{item.groups.join(', ')} <br/></div>)}</td>)}
  </tr>
  <tr>
    <td>Cetvrtak</td>
    {tableData[3].map((cell) => <td>{cell.map((item: any) => <div style={{width: "100%", backgroundColor : item.color, marginTop: "5px", marginBottom: "5px"}}>{item.class_full_name} <br/>{item.class} <br/>{item.lecturer} <br/>{item.room} <br/>{item.groups.join(', ')} <br/></div>)}</td>)}
  </tr>
  <tr>
    <td>Petak</td>
    {tableData[4].map((cell) => <td>{cell.map((item: any) => <div style={{width: "100%", backgroundColor : item.color, marginTop: "5px", marginBottom: "5px"}}>{item.class_full_name} <br/>{item.class} <br/>{item.lecturer} <br/>{item.room} <br/>{item.groups.join(', ')} <br/></div>)}</td>)}
  </tr>
  </tbody>
</table>
  );
}