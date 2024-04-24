import {Image} from "react-native"

import AnimalCategory from '../models/animal-category'
import Animal from '../models/animal'

import Cat from '../assets/categories/cat-01.jpg'
import AdventureCat from '../assets/cats/adventure-cat-01.jpg'
import WizardCat from '../assets/cats/wizard-cat-01.jpg'
import ChefCat from '../assets/cats/chef-cat-01.jpg'
import PirateCat from '../assets/cats/pirate-cat-01.jpg'
import ScientistCat from '../assets/cats/scientist-cat-01.jpg'
import HeroCat from '../assets/cats/hero-cat-01.jpg'
import ArtistCat from '../assets/cats/artist-cat-01.jpg'
import DetectiveCat from '../assets/cats/detective-cat-01.jpg'

import Dog from '../assets/categories/dog-01.jpg'
import BoxingDog from '../assets/dogs/boxing-dog-01.jpg'
import BusDriverDog from '../assets/dogs/bus-driver-dog-01.jpg'
import ConstructionDog from '../assets/dogs/construction-dog-01.jpg'
import DjDog from '../assets/dogs/dj-dog-01.jpg'
import DrDog from '../assets/dogs/dr-dog-01.jpg'
import FirefighterDog from '../assets/dogs/firefighter-dog-01.jpg'
import LifeguardDog from '../assets/dogs/lifeguard-dog-01.jpg'
import LumberjackDog from '../assets/dogs/lumberjack-dog-01.jpg'
import PilotDog from '../assets/dogs/pilot-dog-01.jpg'
import SpaceDog from '../assets/dogs/space-dog-01.jpg'

import Bird from '../assets/categories/bird-01.jpg'
import Fish from '../assets/categories/fish-01.jpg'
import Kangaroo from '../assets/categories/kangaroo-01.jpg'
import Elephant from '../assets/categories/elephant-01.jpg'
import Bear from '../assets/categories/bear-01.jpg'
import Lizard from '../assets/categories/lizard-01.jpg'
import Dragonfly from '../assets/categories/dragonfly-01.jpg'
import Monkey from '../assets/categories/monkey-01.jpg'

import FishIcon from '../assets/categories/fish/fish.jpg'
import AmphibianIcon from '../assets/categories/amphibian/amphibian.jpg'
import ReptileIcon from '../assets/categories/reptile/reptile.jpg'
import BirdIcon from '../assets/categories/bird/bird.jpg'
import MammalIcon from '../assets/categories/mammal/mammal.jpg'

import SushiChefFish from '../assets/categories/fish/sushi-chef-fish-01.jpg'
import WaterparkManagerFish from '../assets/categories/fish/waterpark-manager-fish-01.jpg'

import DjNewt from '../assets/categories/amphibian/dj-newt-01.jpg'
import YogaInstructorFrog from '../assets/categories/amphibian/yoga-instructor-frog-01.jpg'

import MarathonCoachTortoise from '../assets/categories/reptile/marathon-coach-tortoise-01.jpg'
import DentistCrocodile from '../assets/categories/reptile/dentist-crocodile-01.jpg'

import SecurityGuardOwl from '../assets/categories/bird/security-guard-owl-01.jpg'

import IceCreamShopPenguin from '../assets/categories/bird/ice-cream-shop-penguin-01.jpg'
import ArtistElephant from '../assets/categories/mammal/artist-elephant-01.jpg'

import PostmanKangaroo from '../assets/categories/mammal/postman-kangaroo-01.jpg'

const CAT = Image.resolveAssetSource(Cat).uri
const ADVENTURE_CAT = Image.resolveAssetSource(AdventureCat).uri
const WIZARD_CAT = Image.resolveAssetSource(WizardCat).uri
const CHEF_CAT = Image.resolveAssetSource(ChefCat).uri
const PIRATE_CAT = Image.resolveAssetSource(PirateCat).uri
const SCIENTIST_CAT = Image.resolveAssetSource(ScientistCat).uri
const HERO_CAT = Image.resolveAssetSource(HeroCat).uri
const ARTIST_CAT = Image.resolveAssetSource(ArtistCat).uri
const DETECTIVE_CAT = Image.resolveAssetSource(DetectiveCat).uri

const DOG = Image.resolveAssetSource(Dog).uri
const BOXING_DOG = Image.resolveAssetSource(BoxingDog).uri
const BUS_DRIVER_DOG = Image.resolveAssetSource(BusDriverDog).uri
const CONSTRUCTION_DOG = Image.resolveAssetSource(ConstructionDog).uri
const DJ_DOG = Image.resolveAssetSource(DjDog).uri
const DR_DOG = Image.resolveAssetSource(DrDog).uri
const FIREFIGHTER_DOG = Image.resolveAssetSource(FirefighterDog).uri
const LIFEGUARD_DOG = Image.resolveAssetSource(LifeguardDog).uri
const LUMBERJACK_DOG = Image.resolveAssetSource(LumberjackDog).uri
const PILOT_DOG = Image.resolveAssetSource(PilotDog).uri
const SPACE_DOG = Image.resolveAssetSource(SpaceDog).uri

const BIRD = Image.resolveAssetSource(Bird).uri
const FISH = Image.resolveAssetSource(Fish).uri
const KANGAROO = Image.resolveAssetSource(Kangaroo).uri
const ELEPHANT = Image.resolveAssetSource(Elephant).uri
const BEAR = Image.resolveAssetSource(Bear).uri
const LIZARD = Image.resolveAssetSource(Lizard).uri
const DRAGONFLY = Image.resolveAssetSource(Dragonfly).uri
const MONKEY = Image.resolveAssetSource(Monkey).uri

const FISH_ICON = Image.resolveAssetSource(FishIcon).uri
const AMPHIBIAN_ICON = Image.resolveAssetSource(AmphibianIcon).uri
const REPTILE_ICON = Image.resolveAssetSource(ReptileIcon).uri
const BIRD_ICON = Image.resolveAssetSource(BirdIcon).uri
const MAMMAL_ICON = Image.resolveAssetSource(MammalIcon).uri

const SUSHI_CHEF_FISH = Image.resolveAssetSource(SushiChefFish).uri
const WATERPARK_MANAGER_FISH = Image.resolveAssetSource(WaterparkManagerFish).uri

const DJ_NEWT = Image.resolveAssetSource(DjNewt).uri
const YOGA_INSTRUCTOR_FROG = Image.resolveAssetSource(YogaInstructorFrog).uri

const MARATHON_COACH_TORTOISE = Image.resolveAssetSource(MarathonCoachTortoise).uri
const DENTIST_CROCODILE = Image.resolveAssetSource(DentistCrocodile).uri

const SECURITY_GUARD_OWL = Image.resolveAssetSource(SecurityGuardOwl).uri
const ICE_CREAM_SHOP_PENGUIN = Image.resolveAssetSource(IceCreamShopPenguin).uri

const ARTIST_ELEPHANT = Image.resolveAssetSource(ArtistElephant).uri
const POSTMAN_KANGAROO = Image.resolveAssetSource(PostmanKangaroo).uri

export const ANIMAL_CATEGORIES = [
    new AnimalCategory('f1', 'Fish', FISH_ICON),
    new AnimalCategory('a1', 'Amphibian', AMPHIBIAN_ICON),
    new AnimalCategory('r1', 'Reptile', REPTILE_ICON),
    new AnimalCategory('b1', 'Bird', BIRD_ICON),
    new AnimalCategory('m1', 'Mammal', MAMMAL_ICON),
    // new AnimalCategory('c1', 'Cat', CAT),
    // new AnimalCategory('c2', 'Dog', DOG),
    // new AnimalCategory('c3', 'Bird', BIRD),
    // new AnimalCategory('c4', 'Fish', FISH),
    // new AnimalCategory('c5', 'Kangaroo', KANGAROO),
    // new AnimalCategory('c6', 'Elephant', ELEPHANT),
    // new AnimalCategory('c7', 'Bear', BEAR),
    // new AnimalCategory('c8', 'Lizard', LIZARD),
    // new AnimalCategory('c9', 'Dragonfly', DRAGONFLY),
    // new AnimalCategory('c10', 'Monkey', MONKEY),
];

export const ANIMALS = [
    new Animal(
        'f001',
        ['f1'],
        'Fish',
        'Sushi Chef Trout',
        'Sushi Chef Trout is a master at making sushi. He loves to roll up fish and rice and serve it to his friends.',
        'It always makes me a little nervous, but I love making sushi!',
        SUSHI_CHEF_FISH,
        FISH_ICON,
        'Easy',
        '1 Hour',
        [
            'Apron',
            'Chef Knife',
            'Rice Roll',
            'Fish',
            'Garnish'
        ],
        [
            'Gather and wash ingredients.',
            'Prepare fish.',
            'Add garnish.',
            'Roll and serve.',
            'Get a 5-star rating.'
        ],
        'Common',
        false,
        5,
    ),
    new Animal(
        'f002',
        ['f1'],
        'Fish',
        'Waterpark Manager Goldfish',
        'Waterpark Manager Goldfish is in charge of making sure everyone has a great time at the water park. He loves to see people having fun.',
        'Have fun and remember, NO RUNNING!',
        WATERPARK_MANAGER_FISH,
        FISH_ICON,
        'Easy',
        '1 Hour',
        [
            'Ball Cap',
            'Whistle',
            'Sunscreen',
            'Clipboard',
            'Water Bottle'
        ],
        [
            'Check clipboard.',
            'Test water quality',
            'Remind swimmers to walk.',
            'Perform safety checks.',
            'Make sure everybody has fun.',
        ],
        'Common',
        false,
        5,
    ),
    new Animal(
        'a001',
        ['a1'],
        'Amphibian',
        'DJ Newt',
        'DJ Newt is an MC at mixing music. He loves to play and mix music and dance the night away.',
        'Turn up the music and let\'s dance!',
        DJ_NEWT,
        AMPHIBIAN_ICON,
        'Easy',
        '1 Hour',
        [
            'Headphones',
            'Turntable',
            'Mixer',
            'Records',
            'Microphone'
        ],
        [
            'Find a beat.',
            'Start mixing.',
            'Gather a crowd.',
            'Get everybody dancing.',
            'Drop the bass.'
        ],
        'Uncommon',
        false,
        10,
    ),
    new Animal(
        'a002',
        ['a1'],
        'Amphibian',
        'Yoga Instructor Frog',
        'Yoga Instructor Frog will help you find your inner peace. He loves to teach yoga and help people relax.',
        'Breathe in, breathe out.',
        YOGA_INSTRUCTOR_FROG,
        AMPHIBIAN_ICON,
        'Easy',
        '1 Hour',
        [
            'Yoga Mat',
            'Towel',
            'Trickling Water',
            'Incense',
            'Peace Stone'
        ],
        [
            'Find a quiet place.',
            'Start stretching.',
            'Focus on your breathing.',
            'Clear your mind',
            'Find your inner peace.'
        ],
        'Common',
        false,
        5,
    ),
    new Animal(
        'r001',
        ['r1'],
        'Reptile',
        'Marathon Coach Tortoise',
        'Who better to train you for a marathon than a tortoise? Marathon Coach Tortoise will help you build up your endurance and reach your goals.',
        'Slow and steady wins the race.',
        MARATHON_COACH_TORTOISE,
        REPTILE_ICON,
        'Easy',
        '1 Hour',
        [
            'Running Shoes',
            'Sweatband',
            'Baton',
            'Stopwatch',
            'Starter Pistol'
        ],
        [
            'Start stretching.',
            'Warm up with a light jog.',
            'Start running.',
            'Outlast the competition.',
            'Finish strong.'
        ],
        'Common',
        false,
        20,
    ),
    new Animal(
        'r002',
        ['r1'],
        'Reptile',
        'Dentist Crocodile',
        'Dentist Crocodile is tooth expert. He loves to make sure everyone has a healthy smile.',
        'Open wide and say ahh!',
        DENTIST_CROCODILE,
        REPTILE_ICON,
        'Easy',
        '1 Hour',
        [
            'Toothbrush',
            'Toothpaste',
            'Floss',
            'Mouthwash',
            'Dental Tools'
        ],
        [
            'Check teeth.',
            'Extract bad tooth.',
            'Fill cavity',
            'Clean teeth.',
            'Give advice.',
        ],
        'Common',
        false,
        50,
    ),
    new Animal(
        'b001',
        ['b1'],
        'Bird',
        'Security Guard Owl',
        'Security Guard Owl works overnight at the museum. He loves to keep an eye on the exhibits and make sure everything is safe.',
        'Whooo goes there?',
        SECURITY_GUARD_OWL,
        BIRD_ICON,
        'Easy',
        '1 Hour',
        [
            'Flashlight 🔦',
            'Walkie Talkie 📻',
            'Security Badge 🪪',
            'Alarm Code 🔢',
            'Thermal Camera 📹'
        ],
        [
            'Check the exhibits.',
            'Walk the perimeter.',
            'Use the thermal camera.',
            'Reset the alarm.',
            'Make it until sunrise.'
        ],
        'Uncommon',
        true,
        100,
    ),
    new Animal(
        'b002',
        ['b1'],
        'Bird',
        'Ice Cream Shop Penguin',
        'Ice Cream Shop Penguin loves to serve up sweet treats to his friends. He has all the best flavors and toppings to choose from.',
        'I scream, you scream, we all scream for ice cream!',
        ICE_CREAM_SHOP_PENGUIN,
        BIRD_ICON,
        'Easy',
        '1 Hour',
        [
            'Ice Cream Scoop',
            'Waffle Cone',
            'Sprinkles',
            'Whipped Cream',
            'Cherries'
        ],
        [
            'Choose a flavor.',
            'Prepare the cone',
            'Scoop the ice cream.',
            'Add toppings.',
            'Serve without spilling.'
        ],
        'Common',
        false,
        20,
    ),
    new Animal(
        'm001',
        ['m1'],
        'Mammal',
        'Artist Elephant',
        'Artist Elephant loves to paint and create beautiful works of art. He loves to share his art with his friends and family.',
        'Art is my passion.',
        ARTIST_ELEPHANT,
        MAMMAL_ICON,
        'Easy',
        '1 Hour',
        [
            'Paint',
            'Brush',
            'Canvas',
            'Easel',
            'Palette'
        ],
        [
            'Find a subject.',
            'Find a scene',
            'Set up your easel.',
            'Start painting.',
            'Bring the subject to life.'
        ],
        'Common',
        false,
        20,
    ),
    new Animal(
        'm002',
        ['m1'],
        'Mammal',
        'Postman Kangaroo',
        'Postman Kangaroo delivers mail to all his friends in the outback. He loves to make sure everyone gets their letters and packages on time.',
        'Special delivery!',
        POSTMAN_KANGAROO,
        MAMMAL_ICON,
        'Easy',
        '1 Hour',
        [
            'Mail Bag',
            'Letters',
            'Packages',
            'Truck',
            'Map'
        ],
        [
            'Sort the packages.',
            'Sort the mail.',
            'Load the truck.',
            'Chart route on map.',
            'Deliver everything.'
        ],
        'Common',
        false,
        50,
    ),


    // new Animal(
    //     'a1',
    //     ['c1'],
    //     'Adventure Cat',
    //     ADVENTURE_CAT,
    //     CAT,
    //     'Simple',
    //     '1 Hour',
    //     ['backpack', 'water', 'food', 'map', 'compass'],
    //     [
    //         'Find a trail and start walking.',
    //         'Make sure to bring water and food.',
    //         'If you get lost, use your map and compass to find your way back.',
    //         'Enjoy the adventure!'
    //     ],
    //     false,
    //     false,
    //     true,
    // ),
    // new Animal(
    //     'a2',
    //     ['c1'],
    //     'Wizard Cat',
    //     WIZARD_CAT,
    //     CAT,
    //     'Hard',
    //     '5 Hours',
    //     ['staff', 'spell book', 'amulet', 'robe', 'hat'],
    //     [
    //         'Find a spell',
    //         'Use the spell to cast magic',
    //         'Enjoy the magic!'
    //     ],
    //     false,
    //     false,
    //     true,
    // ),
    // new Animal(
    //     'a3',
    //     ['c1'],
    //     'Chef Cat',
    //     CHEF_CAT,
    //     CAT,
    //     'Medium',
    //     '2 Hours',
    //     ['apron', 'chef hat', 'knife', 'cutting board', 'ingredients'],
    //     [
    //         'Find a recipe',
    //         'Gather the ingredients',
    //         'Start cooking!',
    //         'Enjoy the meal!'
    //     ],
    //     false,
    //     false,
    //     true,
    // ),
    // new Animal(
    //     'a4',
    //     ['c1'],
    //     'Pirate Cat',
    //     PIRATE_CAT,
    //     CAT,
    //     'Very Hard',
    //     '8 Hours',
    //     ['pirate hat', 'sword', 'map', 'compass', 'treasure'],
    //     [
    //         'Find a treasure map',
    //         'Follow the map to find the treasure',
    //         'Enjoy the treasure!'
    //     ],
    //     true,
    //     true,
    //     true,
    // ),
    // new Animal(
    //     'a5',
    //     ['c1'],
    //     'Scientist Cat',
    //     SCIENTIST_CAT,
    //     CAT,
    //     'Hard',
    //     '6 Hours',
    //     ['lab coat', 'goggles', 'beaker', 'test tube', 'chemicals'],
    //     [
    //         'Find a hypothesis',
    //         'Test the hypothesis',
    //         'Enjoy the results!'
    //     ],
    //     true,
    //     false,
    //     true,
    // ),
    // new Animal(
    //     'a6',
    //     ['c1'],
    //     'Hero Cat',
    //     HERO_CAT,
    //     CAT,
    //     'Hard',
    //     '5 Hours',
    //     ['cape', 'mask', 'boots', 'gloves', 'belt'],
    //     [
    //         'Find a villain',
    //         'Defeat the villain',
    //         'Enjoy the victory!'
    //     ],
    //     true,
    //     false,
    //     true,
    // ),
    // new Animal(
    //     'a7',
    //     ['c1'],
    //     'Artist Cat',
    //     ARTIST_CAT,
    //     CAT,
    //     'Easy',
    //     '2 Hours',
    //     ['paint', 'brush', 'canvas', 'easel', 'palette'],
    //     [
    //         'Find a subject',
    //         'Start painting',
    //         'Enjoy the art!'
    //     ],
    //     false,
    //     false,
    //     true,
    // ),
    // new Animal(
    //     'a8',
    //     ['c1'],
    //     'Detective Cat',
    //     DETECTIVE_CAT,
    //     CAT,
    //     'Medium',
    //     '3 Hours',
    //     ['magnifying glass', 'hat', 'coat', 'gloves', 'notebook'],
    //     [
    //         'Find a mystery',
    //         'Solve the mystery',
    //         'Enjoy the truth!'
    //     ],
    //     true,
    //     false,
    //     true,
    // ),
    // new Animal(
    //     'a9',
    //     ['c2'],
    //     'Boxing Dog',
    //     BOXING_DOG,
    //     DOG,
    //     'Hard',
    //     '5 Hours',
    //     ['gloves', 'shorts', 'shoes', 'headgear', 'mouth guard'],
    //     [
    //         'Find an opponent',
    //         'Start boxing',
    //         'Enjoy the fight!'
    //     ],
    //     true,
    //     false,
    //     true,
    // ),
    // new Animal(
    //     'a10',
    //     ['c2'],
    //     'Bus Driver Dog',
    //     BUS_DRIVER_DOG,
    //     DOG,
    //     'Medium',
    //     '3 Hours',
    //     ['uniform', 'hat', 'gloves', 'ticket book', 'bus'],
    //     [
    //         'Find a route',
    //         'Start driving',
    //         'Enjoy the ride!'
    //     ],
    //     true,
    //     false,
    //     true,
    // ),
    // new Animal(
    //     'a11',
    //     ['c2'],
    //     'Construction Dog',
    //     CONSTRUCTION_DOG,
    //     DOG,
    //     'Hard',
    //     '5 Hours',
    //     ['hard hat', 'gloves', 'boots', 'hammer', 'nails'],
    //     [
    //         'Find a project',
    //         'Start building',
    //         'Enjoy the construction!'
    //     ],
    //     true,
    //     false,
    //     true,
    // ),
    // new Animal(
    //     'a12',
    //     ['c2'],
    //     'DJ Dog',
    //     DJ_DOG,
    //     DOG,
    //     'Medium',
    //     '3 Hours',
    //     ['headphones', 'turntable', 'mixer', 'records', 'microphone'],
    //     [
    //         'Find a beat',
    //         'Start mixing',
    //         'Enjoy the music!'
    //     ],
    //     true,
    //     false,
    //     true,
    // ),
    // new Animal(
    //     'a13',
    //     ['c2'],
    //     'Dr. Dog',
    //     DR_DOG,
    //     DOG,
    //     'Hard',
    //     '6 Hours',
    //     ['stethoscope', 'lab coat', 'gloves', 'scrubs', 'mask'],
    //     [
    //         'Find a patient',
    //         'Start diagnosing',
    //         'Enjoy the healing!'
    //     ],
    //     true,
    //     false,
    //     true,
    // ),
    // new Animal(
    //     'a14',
    //     ['c2'],
    //     'Firefighter Dog',
    //     FIREFIGHTER_DOG,
    //     DOG,
    //     'Very Hard',
    //     '8 Hours',
    //     ['helmet', 'coat', 'gloves', 'boots', 'hose'],
    //     [
    //         'Find a fire',
    //         'Start fighting',
    //         'Enjoy the victory!'
    //     ],
    //     true,
    //     false,
    //     true,
    // ),
    // new Animal(
    //     'a15',
    //     ['c2'],
    //     'Lifeguard Dog',
    //     LIFEGUARD_DOG,
    //     DOG,
    //     'Medium',
    //     '3 Hours',
    //     ['whistle', 'float', 'goggles', 'swimsuit', 'sunscreen'],
    //     [
    //         'Find a swimmer',
    //         'Start saving',
    //         'Enjoy the rescue!'
    //     ],
    //     true,
    //     false,
    //     true,
    // ),
    // new Animal(
    //     'a16',
    //     ['c2'],
    //     'Lumberjack Dog',
    //     LUMBERJACK_DOG,
    //     DOG,
    //     'Hard',
    //     '5 Hours',
    //     ['axe', 'gloves', 'boots', 'flannel', 'hat'],
    //     [
    //         'Find a tree',
    //         'Start chopping',
    //         'Enjoy the wood!'
    //     ],
    //     true,
    //     false,
    //     true,
    // ),
    // new Animal(
    //     'a17',
    //     ['c2'],
    //     'Pilot Dog',
    //     PILOT_DOG,
    //     DOG,
    //     'Hard',
    //     '5 Hours',
    //     ['uniform', 'hat', 'gloves', 'goggles', 'plane'],
    //     [
    //         'Find a destination',
    //         'Start flying',
    //         'Enjoy the trip!'
    //     ],
    //     true,
    //     false,
    //     true,
    // ),
    // new Animal(
    //     'a18',
    //     ['c2'],
    //     'Space Dog',
    //     SPACE_DOG,
    //     DOG,
    //     'Very Hard',
    //     '8 Hours',
    //     ['helmet', 'suit', 'gloves', 'boots', 'rocket'],
    //     [
    //         'Find a planet',
    //         'Start exploring',
    //         'Enjoy the discovery!'
    //     ],
    //     true,
    //     false,
    //     true,
    // ),
]
