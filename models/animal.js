class Animal {
    constructor(
        id,
        categoryIds,
        title,
        imageUrl,
        difficulty,
        duration,
        inventory,
        steps,
        isRare,
        isGeneral,
        isUnlocked,
    ) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.title = title;
        this.imageUrl = imageUrl;
        this.difficulty = difficulty;
        this.duration = duration;
        this.inventory = inventory;
        this.steps = steps;
        this.isRare = isRare;
        this.isGeneral = isGeneral;
        this.isUnlocked = isUnlocked;
    }
}

export default Animal;
