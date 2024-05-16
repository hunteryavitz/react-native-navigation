class AnimalDto {
    constructor(
        id,
        categoryIds,
        category,
        title,
        description,
        quote,
        imageUrl,
        categoryImageUrl,
        difficulty,
        duration,
        inventory,
        steps,
        commonality,
        isBoss,
        xp
    ) {
        this.id = id
        this.categoryIds = categoryIds
        this.category = category
        this.title = title
        this.description = description
        this.quote = quote
        this.imageUrl = imageUrl
        this.categoryImageUrl = categoryImageUrl
        this.difficulty = difficulty
        this.duration = duration
        this.durationCompleted = 0
        this.inventory = inventory
        this.inventoryCollected = []
        this.steps = steps
        this.stepsCompleted = []
        this.commonality = commonality
        this.isBoss = isBoss
        this.isUnlocked = true
        this.status = 'locked'
        this.xp = xp
    }
}

export default AnimalDto
