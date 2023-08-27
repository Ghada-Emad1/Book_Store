const currentFormst=Intl.NumberFormat('en-Us',{
    currency:'USD',
    style:"currency"
})

export const FormatCurrency=(number:number)=>{
  return currentFormst.format(number);
}