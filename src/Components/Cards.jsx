import '../App.css'

const Cards = (props) => {
    let pack_name = props.data.pack
    let reports = props.data.reports 

    function condn_load(pckname,reports_stat){
        if(pckname=='FREE'){
            return <div>
                <p class="text-muted">✘ {props.data.private_project}</p>
                <p class="text-muted">✘ {props.data.phone_support}</p>
                <p class="text-muted">✘ {props.data.subdomain}</p>
                <p class="text-muted">✘ {reports_stat}</p>
                <button className="btn btn-primary" disabled><b>BUTTON</b></button>
            </div>
        }else{
            return<div>
                <p>✔ {props.data.private_project}</p>
                <p>✔ {props.data.phone_support}</p>
                <p>✔ {props.data.subdomain}</p>
                {pckname=="PRO" ? <p>✔ {reports_stat} <br /><br /><button className="btn btn-primary"><b>BUTTON</b></button></p>: <p class="text-muted">✘ {reports_stat} <br /><br /><button className="btn btn-primary" disabled><b>BUTTON</b></button></p>}
            </div>
        }
    }

  return (
    <div className="card">
        <div className="card-body">
            <p style={{color:"#A6A7AC"}}><b>{pack_name}</b></p>     
            <h3 className="card-title"><b>{props.data.title}</b></h3>
            <p className="card-text">
                <p>✔ {props.data.user_count}</p>
                <p>✔ {props.data.storage}</p>
                <p>✔ {props.data.public_project}</p>
                <p>✔ {props.data.access}</p>
                {condn_load(pack_name,reports)}
            </p>
        </div>
    </div>   
  )
}

export default Cards