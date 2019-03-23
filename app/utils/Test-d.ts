export async function testD () {
    console.log("d");
    function delay() {
        return new Promise((resolve) => setTimeout(resolve, 800));
    }
    this.delay = delay;
    await this.delay();
    console.log("fuck d");
 }