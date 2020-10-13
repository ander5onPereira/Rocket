export default function convertHourToMinutes(time:string){
  
  const [hora,minuto]=time.split(":").map(Number);
  const timeInMinutos= (hora*60)+minuto;
  return timeInMinutos;
}