export default class User{
    constructor(
        public Name: string,
        public Password : string,
        public Id : number =0,
        public Address : string ='',
        public Mail : string ='',   
        ){}
}