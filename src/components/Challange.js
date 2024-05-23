function Challange({challange}){
    return (

    <a href="#" class="list-group-item list-group-item-action" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{challange.month}</h5>
    </div>
    <p class="mb-1">{challange.description}</p>
    </a>
    );
}

export default Challange;