import {Image} from "react-native";

import AnimalCategory from '../models/animal-category';
import Animal from '../models/animal';

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

const CAT = Image.resolveAssetSource(Cat).uri;
const ADVENTURE_CAT = Image.resolveAssetSource(AdventureCat).uri;
const WIZARD_CAT = Image.resolveAssetSource(WizardCat).uri;
const CHEF_CAT = Image.resolveAssetSource(ChefCat).uri;
const PIRATE_CAT = Image.resolveAssetSource(PirateCat).uri;
const SCIENTIST_CAT = Image.resolveAssetSource(ScientistCat).uri;
const HERO_CAT = Image.resolveAssetSource(HeroCat).uri;
const ARTIST_CAT = Image.resolveAssetSource(ArtistCat).uri;
const DETECTIVE_CAT = Image.resolveAssetSource(DetectiveCat).uri;

const DOG = Image.resolveAssetSource(Dog).uri;
const BOXING_DOG = Image.resolveAssetSource(BoxingDog).uri;
const BUS_DRIVER_DOG = Image.resolveAssetSource(BusDriverDog).uri;
const CONSTRUCTION_DOG = Image.resolveAssetSource(ConstructionDog).uri;
const DJ_DOG = Image.resolveAssetSource(DjDog).uri;
const DR_DOG = Image.resolveAssetSource(DrDog).uri;
const FIREFIGHTER_DOG = Image.resolveAssetSource(FirefighterDog).uri;
const LIFEGUARD_DOG = Image.resolveAssetSource(LifeguardDog).uri;
const LUMBERJACK_DOG = Image.resolveAssetSource(LumberjackDog).uri;
const PILOT_DOG = Image.resolveAssetSource(PilotDog).uri;
const SPACE_DOG = Image.resolveAssetSource(SpaceDog).uri;

const BIRD = Image.resolveAssetSource(Bird).uri;
const FISH = Image.resolveAssetSource(Fish).uri;
const KANGAROO = Image.resolveAssetSource(Kangaroo).uri;
const ELEPHANT = Image.resolveAssetSource(Elephant).uri;
const BEAR = Image.resolveAssetSource(Bear).uri;
const LIZARD = Image.resolveAssetSource(Lizard).uri;
const DRAGONFLY = Image.resolveAssetSource(Dragonfly).uri;
const MONKEY = Image.resolveAssetSource(Monkey).uri;

export const ANIMAL_CATEGORIES = [
    new AnimalCategory('c1', 'Cat', CAT),
    new AnimalCategory('c2', 'Dog', DOG),
    new AnimalCategory('c3', 'Bird', BIRD),
    new AnimalCategory('c4', 'Fish', FISH),
    new AnimalCategory('c5', 'Kangaroo', KANGAROO),
    new AnimalCategory('c6', 'Elephant', ELEPHANT),
    new AnimalCategory('c7', 'Bear', BEAR),
    new AnimalCategory('c8', 'Lizard', LIZARD),
    new AnimalCategory('c9', 'Dragonfly', DRAGONFLY),
    new AnimalCategory('c10', 'Monkey', MONKEY),
];

export const ANIMALS = [
    new Animal(
        'a1',
        ['c1'],
        'Adventure Cat',
        ADVENTURE_CAT,
        'Simple',
        '1 Hour',
        ['backpack', 'water', 'food', 'map', 'compass'],
        [
            'Find a trail and start walking.',
            'Make sure to bring water and food.',
            'If you get lost, use your map and compass to find your way back.',
            'Enjoy the adventure!'
        ],
        false,
        false,
        true,
    ),
    new Animal(
        'a2',
        ['c1'],
        'Wizard Cat',
        WIZARD_CAT,
        'Hard',
        '5 Hours',
        ['staff', 'spell book', 'amulet', 'robe', 'hat'],
        [
            'Find a spell',
            'Use the spell to cast magic',
            'Enjoy the magic!'
        ],
        false,
        false,
        true,
    ),
    new Animal(
        'a3',
        ['c1'],
        'Chef Cat',
        CHEF_CAT,
        'Medium',
        '2 Hours',
        ['apron', 'chef hat', 'knife', 'cutting board', 'ingredients'],
        [
            'Find a recipe',
            'Gather the ingredients',
            'Start cooking!',
            'Enjoy the meal!'
        ],
        false,
        false,
        true,
    ),
    new Animal(
        'a4',
        ['c1'],
        'Pirate Cat',
        PIRATE_CAT,
        'Very Hard',
        '8 Hours',
        ['pirate hat', 'sword', 'map', 'compass', 'treasure'],
        [
            'Find a treasure map',
            'Follow the map to find the treasure',
            'Enjoy the treasure!'
        ],
        true,
        true,
        true,
    ),
    new Animal(
        'a5',
        ['c1'],
        'Scientist Cat',
        SCIENTIST_CAT,
        'Hard',
        '6 Hours',
        ['lab coat', 'goggles', 'beaker', 'test tube', 'chemicals'],
        [
            'Find a hypothesis',
            'Test the hypothesis',
            'Enjoy the results!'
        ],
        true,
        false,
        true,
    ),
    new Animal(
        'a6',
        ['c1'],
        'Hero Cat',
        HERO_CAT,
        'Hard',
        '5 Hours',
        ['cape', 'mask', 'boots', 'gloves', 'belt'],
        [
            'Find a villain',
            'Defeat the villain',
            'Enjoy the victory!'
        ],
        true,
        false,
        true,
    ),
    new Animal(
        'a7',
        ['c1'],
        'Artist Cat',
        ARTIST_CAT,
        'Easy',
        '2 Hours',
        ['paint', 'brush', 'canvas', 'easel', 'palette'],
        [
            'Find a subject',
            'Start painting',
            'Enjoy the art!'
        ],
        false,
        false,
        true,
    ),
    new Animal(
        'a8',
        ['c1'],
        'Detective Cat',
        DETECTIVE_CAT,
        'Medium',
        '3 Hours',
        ['magnifying glass', 'hat', 'coat', 'gloves', 'notebook'],
        [
            'Find a mystery',
            'Solve the mystery',
            'Enjoy the truth!'
        ],
        true,
        false,
        true,
    ),
    new Animal(
        'a9',
        ['c2'],
        'Boxing Dog',
        BOXING_DOG,
        'Hard',
        '5 Hours',
        ['gloves', 'shorts', 'shoes', 'headgear', 'mouth guard'],
        [
            'Find an opponent',
            'Start boxing',
            'Enjoy the fight!'
        ],
        true,
        false,
        true,
    ),
    new Animal(
        'a10',
        ['c2'],
        'Bus Driver Dog',
        BUS_DRIVER_DOG,
        'Medium',
        '3 Hours',
        ['uniform', 'hat', 'gloves', 'ticket book', 'bus'],
        [
            'Find a route',
            'Start driving',
            'Enjoy the ride!'
        ],
        true,
        false,
        true,
    ),
    new Animal(
        'a11',
        ['c2'],
        'Construction Dog',
        CONSTRUCTION_DOG,
        'Hard',
        '5 Hours',
        ['hard hat', 'gloves', 'boots', 'hammer', 'nails'],
        [
            'Find a project',
            'Start building',
            'Enjoy the construction!'
        ],
        true,
        false,
        true,
    ),
    new Animal(
        'a12',
        ['c2'],
        'DJ Dog',
        DJ_DOG,
        'Medium',
        '3 Hours',
        ['headphones', 'turntable', 'mixer', 'records', 'microphone'],
        [
            'Find a beat',
            'Start mixing',
            'Enjoy the music!'
        ],
        true,
        false,
        true,
    ),
    new Animal(
        'a13',
        ['c2'],
        'Dr. Dog',
        DR_DOG,
        'Hard',
        '6 Hours',
        ['stethoscope', 'lab coat', 'gloves', 'scrubs', 'mask'],
        [
            'Find a patient',
            'Start diagnosing',
            'Enjoy the healing!'
        ],
        true,
        false,
        true,
    ),
    new Animal(
        'a14',
        ['c2'],
        'Firefighter Dog',
        FIREFIGHTER_DOG,
        'Very Hard',
        '8 Hours',
        ['helmet', 'coat', 'gloves', 'boots', 'hose'],
        [
            'Find a fire',
            'Start fighting',
            'Enjoy the victory!'
        ],
        true,
        false,
        true,
    ),
    new Animal(
        'a15',
        ['c2'],
        'Lifeguard Dog',
        LIFEGUARD_DOG,
        'Medium',
        '3 Hours',
        ['whistle', 'float', 'goggles', 'swimsuit', 'sunscreen'],
        [
            'Find a swimmer',
            'Start saving',
            'Enjoy the rescue!'
        ],
        true,
        false,
        true,
    ),
    new Animal(
        'a16',
        ['c2'],
        'Lumberjack Dog',
        LUMBERJACK_DOG,
        'Hard',
        '5 Hours',
        ['axe', 'gloves', 'boots', 'flannel', 'hat'],
        [
            'Find a tree',
            'Start chopping',
            'Enjoy the wood!'
        ],
        true,
        false,
        true,
    ),
    new Animal(
        'a17',
        ['c2'],
        'Pilot Dog',
        PILOT_DOG,
        'Hard',
        '5 Hours',
        ['uniform', 'hat', 'gloves', 'goggles', 'plane'],
        [
            'Find a destination',
            'Start flying',
            'Enjoy the trip!'
        ],
        true,
        false,
        true,
    ),
    new Animal(
        'a18',
        ['c2'],
        'Space Dog',
        SPACE_DOG,
        'Very Hard',
        '8 Hours',
        ['helmet', 'suit', 'gloves', 'boots', 'rocket'],
        [
            'Find a planet',
            'Start exploring',
            'Enjoy the discovery!'
        ],
        true,
        false,
        true,
    ),
];
