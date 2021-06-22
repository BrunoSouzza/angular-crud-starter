import { Component, OnInit } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"
import { Product } from "../product.model"
import { ProductService } from "../product.service"

@Component({
  selector: "app-product-delete",
  templateUrl: "./product-delete.component.html",
  styleUrls: ["./product-delete.component.css"],
})
export class ProductDeleteComponent implements OnInit {
  product!: Product
  id!: Number

  constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.id = Number(this.route.snapshot.paramMap.get("id"))
    this.productService.readById(this.id).subscribe((product) => {
      this.product = product
    })
  }

  ngOnInit(): void {}

  deleteProduct(): void {
    this.productService.delete(this.id).subscribe(() => {
      this.productService.showMessage("Deletado com Sucesso")
      this.router.navigate(["/products"])
    })
  }

  cancel(): void {
    this.router.navigate(["/products"])
  }
}
