import { Container } from "react-bootstrap";
import Header from "./Components/UI/Header/Header";
import './Home.scss';
import Image from "next/image";
import TrueFocus from "./Components/Animations/TrueFocus/TrueFocus";
import FadeContent from "./Components/Animations/FadeContent/FadeContent";
import { TypingAnimation } from "@/components/magicui/typing-animation";

export default function Home() {
  return (
    <Container fluid>
      <Header />
      <section className="home-section">
        <TrueFocus
          sentence="Photo Клик"
          manualMode={false}
          blurAmount={5}
          borderColor="orange"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
        <span>Фотостудия самообслуживания</span>
        <div className="action-btns">
          <button>Записаться</button>
          <button>
            <a href="https://youtube.com">Смотреть видео</a>
          </button>
        </div>
      </section>
      <section id="about" className="about-section">
        <h2>
          <TypingAnimation duration={39} className="text-7xl">
            Немного о нас
          </TypingAnimation>
        </h2>
        <div className="about-grid">
          <div className="about-text">
              <TypingAnimation duration={39} className="text-3xl text-about">
                PhotoКлик — мир ярких моментов и качественных снимков! Мы создали уникальную фотостудию самообслуживания, где каждый может стать режиссером своего образа и воплотить самые смелые идеи в жизнь.
              </TypingAnimation>
          </div>
          <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            <div className="about-location">
              <span>ГДЕ МЫ?</span>
              <span>г. Сургут ул. 30 лет Победы, 46</span>
            </div>
          </FadeContent>
          <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            <div className="about-cons">
              <span>Почему Мы?</span>
              <ul>
                <li>Свобода творчества</li>
                <li>Доступные цены/скидки</li>
                <li>Удобство и комфорт</li>
                <li>Большой выбор декора</li>
                <li>Професиональное оборудование</li>
              </ul>
            </div>
          </FadeContent>
          <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            <div className="heart">
              <Image src='/Home/heart.svg' alt=" " width={300} height={300}></Image>
            </div>
          </FadeContent>
          <div className="about-woman">
            <Image src='/Home/woman.png' alt="" width={600} height={300} />
          </div>
        </div>
      </section>
      <section id="steps" className="steps-section">
        <TypingAnimation duration={39} className="text-7xl text-center">
          Как проходит съёмка?
        </TypingAnimation>

        <div className="shoot-steps">
          <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            <div className="shoot-step">
              <span>1</span>
              <div className="step-info">
                <strong>БРОНИРОВАНИЕ</strong>
                <p>Перед тем как поситить нашу студию, советуем Вам забронировать за собой дату и время. Но если вдруг Вы оказались недалеко от нашей студии и у Вас появилось внезапное желание сделать качественные и быстрые фото, вы всегда можете придти к нам и узнать о свободных окошках)</p>
                <button>Забронировать</button>
              </div>
            </div>
          </FadeContent>
          <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
            <div className="shoot-step">
              <span>2</span>
              <div className="step-info">
                <strong>ЗНАКОМСТВО</strong>
                <p>Перед съемкой мы проведем 10-минутный инструктаж, где расскажем как пользоваться волшебным зеркалом, куда нужно встать и сделаем пару тестовых снимков для будущих идеальных фотографий</p>
              </div>
            </div>
          </FadeContent>
          <FadeContent blur={true} duration={2000} easing="ease-out" initialOpacity={0}>
            <div className="shoot-step">
              <span>3</span>
              <div className="step-info">
                <strong>ФОТОСЪЁМКА</strong>
                <p>Все просто! Включаете любимую музыку для атмосферы, выбираете сногсшибательную позу и делаете снимок при помощи пультика в вашей руке. Готовый снимок вы увидите мгновенно на экране.
                  Также вы можете использовать наш реквизит или принести свой. Для дополнительного эффекта в студии есть вентилятор. Чтобы сделать или поправить макияж у нас есть гримерный стол.</p>
              </div>
            </div>
          </FadeContent>
          <FadeContent blur={true} duration={2500} easing="ease-out" initialOpacity={0}>
            <div className="shoot-step">
              <span>4</span>
              <div className="step-info">
                <strong>РЕЗУЛЬТАТ</strong>
                <p>Абсолютно все фотографии сделанные вами будут отправлены вам ссылкой на облачное хранилище в течении дня. (а также для удобства, фотографии можно получить в telegram-бот)</p>
              </div>
            </div>
          </FadeContent>
        </div>
      </section>
      <section id="gallery" className="gallery-section">
        <div className="gallery">
          <Image src="/Gallery/photo1.png" alt="" width={500} height={600} quality={100} />
          <Image src="/Gallery/photo2.png" alt="" width={500} height={600} quality={100} />
          <Image src="/Gallery/photo3.png" alt="" width={500} height={600} quality={100} />
          <Image src="/Gallery/photo4.png" alt="" width={500} height={600} quality={100} />
          <Image src="/Gallery/photo5.png" alt="" width={500} height={600} quality={100} />
          <Image src="/Gallery/photo6.png" alt="" width={500} height={600} quality={100} />
          <Image src="/Gallery/photo7.png" alt="" width={500} height={600} quality={100} />
        </div>
      </section>
    </Container>
  );
}
