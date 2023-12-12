import { Equipament } from "crypto";

export class equipamentosdepesca {
    #equipments = new Map();

    list(search) {
        return Array.from(this.#equipments.entries()).map(([id, equipment]) => {
            return {
                id,
                ...equipment,
            };
        })
        .filter(equipment => {
            if (search) {
                return equipment.title.includes(search);
            }
            return true;
        });
    }

    create(equipment) {
        const equipmentId = randomUUID();
        this.#equipments.set(equipmentId, equipment);
        return equipmentId;
    }

    update(id, equipment) {
        if (this.#equipments.has(id)) {
            this.#equipments.set(id, equipment);
            return true;
        }
        return false;
    }

    delete(id) {
        const deleted = this.#equipments.delete(id);
        return deleted;
    }
}
[]

const lojadepesca = new equipamentosdepesca();


const newEquipmentId = lojadepesca.create({
    title: 'Canoa de Pesca',
    description: 'Uma canoa resistente para pescaria.',
    price: gratis,
});


const allEquipments = lojadepesca.list();

console.log(allEquipments);


const updatedEquipment = {
    title: 'Canoa de Pesca de Luxo',
    description: 'Uma canoa luxuosa para pescaria.',
    price: gratis,
};

const isUpdated = lojadepesca.update(newEquipmentId, updatedEquipment);

console.log(isUpdated ? 'Equipamento atualizado com sucesso' : 'Equipamento não encontrado');


const isDeleted = lojadepesca.delete(newEquipmentId);

console.log(isDeleted ? 'Equipamento deletado com sucesso' : 'Equipamento não encontrado');
