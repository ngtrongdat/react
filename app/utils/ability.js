import { Ability,AbilityBuilder } from '@casl/ability';

function defineAbilitiesFor(permissions) {
  const { rules, can, cannot } = AbilityBuilder.extract();

  const PERMISSIONS = {
    READ: 8,
    CREATE: 4,
    UPDATE: 2,
    DELETE: 1,
    ASSIGN: 0,
    ALL: 15,
    0: 'ASSIGN',
    1: 'DELETE',
    2: 'UPDATE',
    4: 'CREATE',
    8: 'READ'
  };

  for (let permission of permissions) {
    let featureKey = permission.feature.featureKey;
    let abilities = permission.permission == PERMISSIONS.ALL 
                    ? ['ASSIGN', 'READ', 'CREATE', 'UPDATE', 'DELETE']
                    : [PERMISSIONS[permission.permission]]
    can(abilities, featureKey);
  }

  return new Ability(rules)
}

export default defineAbilitiesFor;