export function punchChanceToHit(){
  let chance = Math.random();
  if(chance >= .80 ){
    return true
  } else {
    return false
  }
}

export function bigPunchChanceToHit(){
  let chance = Math.random();
  if(chance >= .50 ){
    return true
  } else {
    return false
  }
}

export function blockChanceToHit(){
  let chance = Math.random();
  if(chance >= .10 ){
    return true
  } else {
    return false
  }
}
