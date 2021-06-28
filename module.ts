export class FooCutter{
    private foo!: string;

    setFoo(str:string){
        this.foo = str;
    }

    getFoo(){
        return this.foo;
    }
}