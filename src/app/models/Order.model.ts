export class Order{
   id:number;
   user_id:number;
   products_ids:number[];
   price:number;
   
   constructor(id:number, user_id:number,products_ids:number[],price:number){
       this.id=id;
       this.user_id=user_id;
       this.products_ids=products_ids;
       this.price=price;
   }
}