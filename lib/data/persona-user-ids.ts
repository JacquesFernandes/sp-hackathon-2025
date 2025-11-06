import {personas} from "@/lib/data/personas";
import {defaultPersonaId} from "@/lib/data/default-persona-id";

const personaUserIds = personas
  .map((persona) => persona.name)
  .filter((name => name.toLowerCase() !== defaultPersonaId.toLowerCase()));
personaUserIds.unshift(defaultPersonaId);

export { personaUserIds };