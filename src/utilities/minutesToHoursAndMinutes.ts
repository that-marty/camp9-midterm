export function m2ham(argMinutes: number | undefined): string | undefined {
    if (typeof argMinutes === "number") {
        if (argMinutes < 60) {
            return (argMinutes + "m");
        } else {
            const hours = Math.trunc(argMinutes/60);
            const minutes = argMinutes % 60;
            return hours + "h " + minutes + "m";
        }
    }
  }