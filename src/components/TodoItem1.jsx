const TodoItem1 = () => {
  let todoName = "Go To College";
  let todoDate = "04/10/2024";

  return (
    <div class="container">
      <div class="row fan-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger fan-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default TodoItem1;
