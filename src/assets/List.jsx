import useFetch from "./Products";

function List() {
  const data = useFetch("https://dummyjson.com/users");

  return (
    <div >
        <h1 style={{color:"gray",textAlign:"center"}}>USER DETAILS</h1>
      
      <div className="divs">
        <ul className="div1">
          {data ? (
            data.map((dt) => (
              <div className="card">
                <h3>Name : {dt.firstName}</h3>
                <h3>email : {dt.email}</h3>
                <h3>Age : {dt.age}</h3>
              </div>
            ))
          ) : (
            <h2>Loading...</h2>
          )}
        </ul>
      </div>
    </div>
  );
}
export default List;
