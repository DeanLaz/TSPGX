class Robot{

  constructor(public color: string) {

  }
  public Beep(): void {
    console.log("Beep");
  }

  public Bop(): void {
    console.log("Bop");
  }
}
const robot = new Robot("Black")
robot.Beep();
robot.Bop();

class SmartRobot extends Robot {
  constructor(public wheels: number, color: string) {
    super(color);
  }
 public Beep(): void {
    console.log("Beep I'm Smart");
  }

  Bop(): void {
    console.log("Bop I'm Smart");
  }

  private Boop(): void {
    console.log("Boop I'm Smart");
  }
  startRolling(): void {
    this.Boop()
    this.Beep()
  }
}


const smartRobot = new SmartRobot(4, "Dark Green")
smartRobot.Beep();
smartRobot.startRolling();

