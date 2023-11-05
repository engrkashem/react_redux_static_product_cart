export const initialState={
    subTotal:0,
    discount:0,
    tax:0,
    total:()=>this.subTotal + this.discount + this.tax
};