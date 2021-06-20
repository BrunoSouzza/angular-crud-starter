import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { ProductService } from "../../../components/product/product.service"
import { Product } from "../product.model"

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: "ABC",
    price: 125.98,
  }

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {}

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Sucesso")
      this.router.navigate(["/products"])
    })
  }

  cancel(): void {
    this.router.navigate(["/products"])
  }
}
