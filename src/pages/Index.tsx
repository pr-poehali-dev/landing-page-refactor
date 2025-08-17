import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [showCallModal, setShowCallModal] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCallRequest = () => {
    setShowCallModal(true);
    // Здесь будет логика отправки заявки
  };

  const brands = ['Apple', 'Samsung', 'Xiaomi', 'Huawei', 'Sony', 'LG'];
  
  const advantages = [
    { icon: 'Shield', title: 'Гарантия качества', description: 'Гарантия на все виды работ до 12 месяцев' },
    { icon: 'Clock', title: 'Быстрый ремонт', description: 'Большинство неисправностей устраняем в день обращения' },
    { icon: 'Award', title: 'Сертифицированные мастера', description: 'Опыт работы более 10 лет, постоянное обучение' },
    { icon: 'Wrench', title: 'Оригинальные запчасти', description: 'Используем только качественные комплектующие' }
  ];

  const repairs = [
    {
      title: 'Замена дисплейного модуля',
      description: 'Восстановление сенсорного экрана и LCD дисплея',
      price: 'от 3500 ₽',
      icon: 'Smartphone'
    },
    {
      title: 'Замена аккумулятора',
      description: 'Замена изношенной батареи на новую оригинальную',
      price: 'от 2000 ₽',
      icon: 'Battery'
    },
    {
      title: 'Обновление ПО',
      description: 'Установка последней версии операционной системы',
      price: 'от 1500 ₽',
      icon: 'Download'
    },
    {
      title: 'Чистка от коррозии',
      description: 'Удаление следов попадания жидкости, восстановление контактов',
      price: 'от 2500 ₽',
      icon: 'Droplets'
    }
  ];

  const priceList = [
    {
      category: 'Ремонт экранов',
      basic: '3500 ₽',
      medium: '5500 ₽',
      complex: '8500 ₽'
    },
    {
      category: 'Замена аккумуляторов',
      basic: '2000 ₽',
      medium: '3500 ₽',
      complex: '5000 ₽'
    },
    {
      category: 'Ремонт материнских плат',
      basic: '4500 ₽',
      medium: '7500 ₽',
      complex: '12000 ₽'
    }
  ];

  const reviews = [
    {
      name: 'Александр М.',
      text: 'Отличный сервис! Починили iPhone за час, работает как новый.',
      rating: 5
    },
    {
      name: 'Елена К.',
      text: 'Профессиональный подход, разумные цены. Рекомендую!',
      rating: 5
    },
    {
      name: 'Дмитрий П.',
      text: 'Быстро и качественно заменили экран на Samsung. Спасибо!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Шапка */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Icon name="Wrench" size={28} className="text-primary" />
                <span className="text-2xl font-bold text-primary">TechService</span>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">О нас</a>
              <a href="#prices" className="text-muted-foreground hover:text-primary transition-colors">Цены</a>
              <a href="#contacts" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
              <a href="#jobs" className="text-muted-foreground hover:text-primary transition-colors">Вакансии</a>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden md:block text-right">
                <p className="text-sm text-muted-foreground">Ежедневно 9:00 - 21:00</p>
                <p className="font-semibold">+7 (495) 123-45-67</p>
              </div>
              <Button onClick={() => setShowCallModal(true)}>
                <Icon name="Phone" size={16} className="mr-2" />
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Блок с формой заказа звонка */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Профессиональный ремонт электроники
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Быстро, качественно, с гарантией. Работаем с ведущими брендами техники.
              </p>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Специализируемся на брендах:</h3>
                <div className="flex flex-wrap gap-2">
                  {brands.map((brand) => (
                    <Badge key={brand} variant="secondary" className="text-sm py-1 px-3">
                      {brand}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Phone" size={20} className="mr-2 text-primary" />
                  Заказать обратный звонок
                </CardTitle>
                <CardDescription>
                  Оставьте заявку и мы перезвоним в течение 5 минут
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <Button onClick={handleCallRequest} className="w-full" size="lg">
                  Позвонить мне
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши преимущества</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={advantage.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Неисправности */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Популярные виды ремонта</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {repairs.map((repair, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={repair.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{repair.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{repair.description}</p>
                  <p className="text-xl font-bold text-primary">{repair.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Нужна консультация?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Ваше имя" />
              <Input placeholder="Телефон" type="tel" />
              <Button className="w-full">Получить консультацию</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Прайс-лист */}
      <section id="prices" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Прайс-лист услуг</h2>
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {priceList.map((category, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-center">{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <h4 className="font-semibold text-green-600 mb-2">Базовый</h4>
                          <p className="text-2xl font-bold">{category.basic}</p>
                        </div>
                        <div className="text-center">
                          <h4 className="font-semibold text-orange-600 mb-2">Средний</h4>
                          <p className="text-2xl font-bold">{category.medium}</p>
                        </div>
                        <div className="text-center">
                          <h4 className="font-semibold text-red-600 mb-2">Сложный</h4>
                          <p className="text-2xl font-bold">{category.complex}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Примеры ремонта */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Примеры наших работ</h2>
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <Card>
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2">
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-4">Замена экрана iPhone</h3>
                        <img 
                          src="/img/49ebdb66-7020-4951-9747-432799c2890d.jpg" 
                          alt="До и после ремонта экрана"
                          className="w-full rounded-lg shadow-lg"
                        />
                      </div>
                      <div className="p-6 bg-accent/20">
                        <h4 className="font-semibold text-lg mb-2">Результат работы:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>✓ Полное восстановление функций</li>
                          <li>✓ Оригинальное качество экрана</li>
                          <li>✓ Гарантия 12 месяцев</li>
                          <li>✓ Время ремонта: 30 минут</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card>
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2">
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-4">Наша мастерская</h3>
                        <img 
                          src="/img/bc4ae89e-dcf4-4e90-8104-3ea287563169.jpg" 
                          alt="Профессиональная мастерская"
                          className="w-full rounded-lg shadow-lg"
                        />
                      </div>
                      <div className="p-6 bg-accent/20">
                        <h4 className="font-semibold text-lg mb-2">Наше оборудование:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>✓ Профессиональные инструменты</li>
                          <li>✓ Диагностическое оборудование</li>
                          <li>✓ Чистая зона для работы</li>
                          <li>✓ Сертифицированные мастера</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Отзывы клиентов</h2>
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="flex justify-center mb-4">
                          {[...Array(review.rating)].map((_, i) => (
                            <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-lg mb-4 italic">"{review.text}"</p>
                        <p className="font-semibold">{review.name}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Контакты */}
      <section id="contacts" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card>
              <CardContent className="pt-6">
                <Icon name="Phone" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Телефон</h3>
                <p className="text-xl">+7 (495) 123-45-67</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Icon name="Mail" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-xl">info@techservice.ru</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Icon name="MapPin" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Адрес</h3>
                <p>Москва, ул. Примерная, 123</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Wrench" size={24} className="text-primary" />
                <span className="text-xl font-bold">TechService</span>
              </div>
              <p className="text-muted-foreground">
                Профессиональный ремонт электроники с гарантией качества
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Меню</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#prices" className="hover:text-primary transition-colors">Цены</a></li>
                <li><a href="#contacts" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#jobs" className="hover:text-primary transition-colors">Вакансии</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Юридическая информация</h3>
              <p className="text-sm text-muted-foreground">
                ООО "ТехСервис"<br />
                ИНН: 1234567890<br />
                ОГРН: 1234567890123
              </p>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 TechService. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Плавающая кнопка заказа звонка */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          size="lg" 
          className="rounded-full shadow-lg"
          onClick={() => setShowCallModal(true)}
        >
          <Icon name="Phone" size={20} className="mr-2" />
          Заказать звонок
        </Button>
      </div>

      {/* Модальное окно (простая заглушка) */}
      {showCallModal && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setShowCallModal(false)}
        >
          <Card className="m-4 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <CardHeader>
              <CardTitle>Заявка отправлена!</CardTitle>
              <CardDescription>
                Мы перезвоним вам в течение 5 минут
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={() => setShowCallModal(false)} className="w-full">
                Закрыть
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Index;