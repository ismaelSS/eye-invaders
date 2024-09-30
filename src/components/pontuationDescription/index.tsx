import eyeDefault from '@/app/assets/images/eyeDefault.png'
import slimeImage from '@/app/assets/images/slime.png'
import Image from 'next/image'

export default function ScoreDescription() {
  return(
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-2'>
        <Image 
        alt='imagem olho inimigo'
        src={eyeDefault}
        width={40}
        height={40}
        id='eyeImage'
        />

        <label htmlFor="eyeImage"> +1 </label>
      </div>

      <div className='flex items-center gap-2'>
        <Image 
        alt='slime amiga'
        src={slimeImage}
        width={40}
        height={40}
        id='eyeImage'
        />

        <label htmlFor="eyeImage"> -2 </label>
      </div>

      <div className='flex items-center gap-2'>
        <div
          className='w-[40px] h-[40px] bg-purple-400 border-2'
        />

        <label htmlFor="eyeImage"> -1 </label>
      </div>
    </div>
  )
}