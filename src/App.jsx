import "./App.css";

const TableList = (props) => {
  const { title, time } = props;
  return (
    <div className="col-sm-3 mb-5">
      <div className="card">
        <p className="card-header bg-dark"></p>
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          <p className="card-text">Ini merupakan isi dari deskripsi kegiatan yang dilakukan</p>
        </div>
        <div className="card-footer text-body-secondary">Pukul : {time}</div>
      </div>
    </div>
  );
};

function App() {
  const appName = "Aplikasi Catatan Yusuf";
  const Kegiatan = ["Instalasi Jaringan", "Service Laptop dan Printer", "Instalasi Kamera CCTV", "Networking", "Menyiapkan Ruangan Meeting", "Kuliah"];
  const listTime = ["07:15 WIB", "10:00 WIB", "12:00 WIB", "14:00 WIB", "15:00 WIB", "17:10 WIB"];
  return (
    <div className="App">
      <h1>{appName}</h1>
      {
        <div className="container mt-5">
          <div className="row">
            <TableList title={Kegiatan[0]} time={listTime[0]} />
            <TableList title={Kegiatan[2]} time={listTime[2]} />
            <TableList title={Kegiatan[3]} time={listTime[3]} />
            <TableList title={Kegiatan[5]} time={listTime[5]} />
            <TableList title={Kegiatan[4]} time={listTime[4]} />
            <TableList title={Kegiatan[1]} time={listTime[1]} />
          </div>
        </div>
      }
    </div>
  );
}

export default App;
