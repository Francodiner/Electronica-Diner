import "./cartWidget.css";

export const CartWidget = () => {

  return (
    <div class="widgets-wrap float-md-right">
      <div class="widget-header  mr-3">
        <a href="#" class="icon icon-sm rounded-circle border"><i class="fa fa-shopping-cart"></i></a>
        <span class="badge badge-pill badge-danger notify">0</span>
      </div>
    </div>
  );
}