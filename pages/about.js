import Image from 'next/image'

import { Eye } from 'react-feather';

import brushes from '../public/brushes.jpg'
import hands from '../public/hands.jpg'
import palette from '../public/palette.jpg'

export default function About() {
  return (

  <div className="container bg-white mx-auto">
  

    <div className="grid lg:grid-cols-2 md:gap-12">

      <div className="w-full h-80 lg:h-full relative">
        <Image
          src={brushes}
          alt="Artist holding a palette"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="px-8 md:pr-16 pt-16">
        <h1 className="text-3xl font-medium uppercase py-4">Anita Ponne</h1>
        <p className="py-4">
              Cat ipsum dolor sit amet, hell is other people and steal the warm chair right after you get up sit as close as possible to warm fire without sitting on cold floor, and touch water with paw then recoil in horror. Curl into a furry donut stretch i cry and cry and cry unless you pet me, and then maybe i cry just for fun. Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked swat turds around the house man running from cops stops to pet cats, goes to jail slap kitten brother with paw so annoy owner until he gives you food say meow repeatedly until belly rubs, feels good. Sit in a box for hours. Milk the cow scratch at door to be let outside, get let out then scratch at door immmediately after to be let back in for hiiiiiiiiii feed me now. Sleep on dog bed, force dog to sleep on floor thug cat cough. Intently sniff hand car rides are evil yet found somthing move i bite it tail. Gnaw the corn cob sniff sniff. Mesmerizing birds cat mojo . Try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard this cat happen now, it was too purr-fect!!! so i will ruin the couch with my claws yet cough furball eat fish on floor so trip owner up in kitchen i want food. Sit in a box for hours furrier and even more furrier hairball but stretch. Lick the plastic bag stick butt in face. Pee on walls it smells like breakfast eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at the fabric before taking a catnap. Catasstrophe going to catch the red dot today going to catch the red dot today and ð•„ð”¼ð•†ð•Ž. Adventure always. One of these days i'm going to get that red dot, just you wait and see i show my fluffy belly but it's a trap! if you pet it i will tear up your hand or x poop on grasses so cat ass trophy and human is washing you why halp oh the horror flee scratch hiss bite. Lick master's hand at first then bite because im moody meowzer need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me for run off table persian cat jump eat fish tweeting a baseball spill litter box, scratch at owner, destroy all furniture, especially couch love blinks and purr purr purr purr yawn. 
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit pariatur vitae, exercitationem nemo, eum quia placeat inventore tenetur provident illo veniam nobis, quo sequi omnis beatae ipsam eaque porro corporis.
        </p>
      </div>
    </div>

    <div className="py-32 text-center">
      <h1 className="text-3xl font-medium uppercase">"Insert inspiring quote here"</h1>
      <p>-By this important person </p>
    </div>

    <div className="relative h-80">
      <Image
        src={hands}
        layout="fill"
        objectFit="cover"
      />

      <Eye color="white" size={200} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
    </div>

    <div className="p-8 md:py-32 md:px-16 grid lg:grid-cols-3 md:gap-24">
      <div className="col-span-2">
        <h1 className="text-3xl font-medium uppercase py-4">Cats 'n paint</h1>
        <p className="py-4">
          Cat ipsum dolor sit amet, hell is other people and steal the warm chair right after you get up sit as close as possible to warm fire without sitting on cold floor, and touch water with paw then recoil in horror. Curl into a furry donut stretch i cry and cry and cry unless you pet me, and then maybe i cry just for fun. Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked swat turds around the house man running from cops stops to pet cats, goes to jail slap kitten brother with paw so annoy owner until he gives you food say meow repeatedly until belly rubs, feels good. Sit in a box for hours. Milk the cow scratch at door to be let outside, get let out then scratch at door immmediately after to be let back in for hiiiiiiiiii feed me now. Sleep on dog bed, force dog to sleep on floor thug cat cough. Intently sniff hand car rides are evil yet found somthing move i bite it tail. Gnaw the corn cob sniff sniff. Mesmerizing birds cat mojo . Try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard this cat happen now, it was too purr-fect!!! so i will ruin the couch with my claws yet cough furball eat fish on floor so trip owner up in kitchen i want food. Sit in a box for hours furrier and even more furrier hairball but stretch. Lick the plastic bag stick butt in face. Pee on walls it smells like breakfast eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at the fabric before taking a catnap. Catasstrophe going to catch the red dot today going to catch the red dot today and ð•„ð”¼ð•†ð•Ž. Adventure always. One of these days i'm going to get that red dot, just you wait and see i show my fluffy belly but it's a trap! if you pet it i will tear up your hand or x poop on grasses so cat ass trophy and human is washing you why halp oh the horror flee scratch hiss bite. Lick master's hand at first then bite because im moody meowzer need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me for run off table persian cat jump eat fish tweeting a baseball spill litter box, scratch at owner, destroy all furniture, especially couch love blinks and purr purr purr purr yawn. 
        </p>
      </div>

      <div className="bg-gray-100/50 px-4 text-center">
        <div className="pt-12">
          <Image
            src={palette}
            width={250}
            height={250}
            layout="fixed"
            className="rounded-full"
          />
        </div>
        <p className="text-3xl font-medium uppercase pt-8">Anita Ponne</p>
        <p className="py-4 px-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum recusandae repellat veniam hic dolore. Ex, fugit quisquam! Quasi ducimus rerum modi, magnam voluptate odit nam iure, itaque et, blanditiis necessitatibus?

        </p>
      </div>
    </div>
  </div>
      

  )
}

