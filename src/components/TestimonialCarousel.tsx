import React, { useState } from 'react';

import { IconCarambolaFilled } from '@tabler/icons-react';
import {
  IGenerateStarsProps,
  ITestimonialCarouselProps,
  ITestimonialProps,
} from '../types/user.ts';
import { KeenSliderInstance } from 'keen-slider';
import { useKeenSlider } from 'keen-slider/react';

const GenerateStarsHTML: React.FC<IGenerateStarsProps> = ({
  rating,
  size = 24,
}) => {
  const maxRating = 5;
  return (
    <>
      {Array.from({ length: maxRating }).map((_, idx) => {
        const filled = idx < rating;
        return (
          <IconCarambolaFilled
            key={idx}
            color={`${filled ? '#ffdf20' : '#f9f9f9'}`}
            size={size}
          />
        );
      })}
    </>
  );
};

const Testimonial: React.FC<ITestimonialProps> = ({
  title,
  imageUrl,
  name,
  rating,
}) => {
  return (
    <div className="w-full keen-slider__slide mb-4 p-4 rounded-4xl bg-[color:var(--color-teal)]">
      <span className="w-fit flex gap-2 mb-2">
        <GenerateStarsHTML rating={rating} size={24} />
      </span>
      <p className="text-base leading-6 mb-2">{title}</p>
      <div className="flex items-center">
        <img
          src={imageUrl}
          alt={name}
          className="w-10 h-10 rounded-full bg-[color:var(--color-bg)"
        />
        <p className="text-sm leading-5 ml-2 font-bold">{name}</p>
      </div>
    </div>
  );
};

const TestimonialCarousel: React.FC<ITestimonialCarouselProps> = ({
  testimonials,
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);

  const slideChanged = (slider: KeenSliderInstance) => {
    setCurrentSlide(slider.track.details.rel);
  };

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: { number: testimonials.length, origin: 'center' },
    loop: true,
    slideChanged,
    created: () => setLoaded(true),
  });

  return (
    <div className="w-fit" ref={sliderRef}>
      <div className="keen-slider flex gap-2">
        {testimonials.map((testimonial, index) => {
          const { title, imageUrl, name, rating } = testimonial;
          return (
            <Testimonial
              title={title}
              imageUrl={imageUrl}
              name={name}
              rating={rating}
              key={index}
            />
          );
        })}
      </div>
      {loaded && instanceRef.current && (
        <div className="w-full dots flex justify-center-safe gap-4 py-2">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={`dot w-2 h-2 rounded ${idx <= currentSlide ? 'active bg-[color:var(--color-main)]' : 'bg-[color:var(--color-disabled)]'}`}
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TestimonialCarousel;
