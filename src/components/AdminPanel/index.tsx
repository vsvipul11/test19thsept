import React, { useState } from 'react';
import styles from './AdminPanel.module.css';
import { Upload, Camera, Eye, EyeOff, Plus, Trash2 } from 'lucide-react';

interface Button {
  text: string;
  href: string;
  className: string;
}

interface NavigationLink {
  text: string;
  href: string;
}

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Checkup {
  title: string;
  color: string;
  icon: string;
}

interface Card {
  title: string;
  originalPrice: number;
  discountedPrice: number;
  discount: string;
  parameters: number;
  reportDate: string;
  cardTitle: string;
  cardDescription: string;
  cardTrustedBy: string;
}

interface ComponentContent {
  buttons?: Button[];
  title?: string;
  description?: string;
  code?: string;
  features?: Feature[];
  logo?: string;
  navigationLinks?: NavigationLink[];
  subtitle?: string;
  buttonText?: string;
  imageSrc?: string;
  viewAllText?: string;
  checkups?: Checkup[];
  placeholder?: string;
  trustedBy?: string;
  cards?: Card[];
}

interface Component {
  visible: boolean;
  content: ComponentContent;
}

interface Package {
  name: string;
  description: string;
  price: number;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Page {
  title: string;
  route: string;
  description: string;
  testInfo: string;
  alsoKnownAs: string;
  price: number;
  discountedPrice: number;
  discount: string;
  peopleBooked: number;
  reportsWithin: string;
  parameters: number;
  requisites: string[];
  measures: string;
  identifies: string;
  testPreparation: string;
  whyThisTest: string;
  interpretations: string;
  packages: Package[];
  faqs: FAQ[];
}

interface Props {
  components: { [key: string]: Component };
  updateComponent: (name: string, update: Partial<Component>) => void;
  pages: { [key: string]: Page };
  updatePage: (route: string, update: Partial<Page>) => void;
  onConfirm: () => void;
}

const AdminPanel: React.FC<Props> = ({ components, updateComponent, pages, updatePage, onConfirm }) => {
  const [activeTab, setActiveTab] = useState<'Components' | 'Pages'>('Components');
  const [activeComponentTab, setActiveComponentTab] = useState<string>(Object.keys(components)[0]);
  const [activePage, setActivePage] = useState<string | null>(null);

  const handleImageChange = (componentName: string, field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateComponent(componentName, { 
          content: { ...components[componentName].content, [field]: reader.result } 
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const renderComponentControls = (name: string, component: Component) => {
    switch (name) {
      case 'CTAButtons':
        return (
          <div className={styles.controlGroup}>
            <h3>CTA Buttons</h3>
            {component.content.buttons?.map((button, index) => (
              <div key={index} className={styles.buttonItem}>
                <input
                  type="text"
                  value={button.text}
                  onChange={(e) => {
                    const updatedButtons = [...(component.content.buttons || [])];
                    updatedButtons[index] = { ...button, text: e.target.value };
                    updateComponent(name, { content: { ...component.content, buttons: updatedButtons } });
                  }}
                  placeholder="Button Text"
                  className={styles.input}
                />
                <input
                  type="text"
                  value={button.href}
                  onChange={(e) => {
                    const updatedButtons = [...(component.content.buttons || [])];
                    updatedButtons[index] = { ...button, href: e.target.value };
                    updateComponent(name, { content: { ...component.content, buttons: updatedButtons } });
                  }}
                  placeholder="Button Link"
                  className={styles.input}
                />
                <input
                  type="text"
                  value={button.className}
                  onChange={(e) => {
                    const updatedButtons = [...(component.content.buttons || [])];
                    updatedButtons[index] = { ...button, className: e.target.value };
                    updateComponent(name, { content: { ...component.content, buttons: updatedButtons } });
                  }}
                  placeholder="Button Class"
                  className={styles.input}
                />
              </div>
            ))}
            <button
              onClick={() => {
                const newButton = { text: '', href: '', className: '' };
                const updatedButtons = [...(component.content.buttons || []), newButton];
                updateComponent(name, { content: { ...component.content, buttons: updatedButtons } });
              }}
              className={styles.addButton}
            >
              <Plus size={20} /> Add Button
            </button>
          </div>
        );
      case 'DiscountOffer':
        return (
          <div className={styles.controlGroup}>
            <h3>Discount Offer</h3>
            <input
              type="text"
              value={component.content.title || ''}
              onChange={(e) => updateComponent(name, { 
                content: { ...component.content, title: e.target.value } 
              })}
              placeholder="Offer Title"
              className={styles.input}
            />
            <textarea
              value={component.content.description || ''}
              onChange={(e) => updateComponent(name, { 
                content: { ...component.content, description: e.target.value } 
              })}
              placeholder="Offer Description"
              className={styles.textarea}
            />
            <input
              type="text"
              value={component.content.code || ''}
              onChange={(e) => updateComponent(name, { 
                content: { ...component.content, code: e.target.value } 
              })}
              placeholder="Offer Code"
              className={styles.input}
            />
          </div>
        );
      case 'Features':
        return (
          <div className={styles.controlGroup}>
            <h3>Features</h3>
            {component.content.features?.map((feature, index) => (
              <div key={index} className={styles.featureItem}>
                <input
                  type="text"
                  value={feature.title}
                  onChange={(e) => {
                    const updatedFeatures = [...(component.content.features || [])];
                    updatedFeatures[index] = { ...feature, title: e.target.value };
                    updateComponent(name, { content: { ...component.content, features: updatedFeatures } });
                  }}
                  placeholder="Feature Title"
                  className={styles.input}
                />
                <textarea
                  value={feature.description}
                  onChange={(e) => {
                    const updatedFeatures = [...(component.content.features || [])];
                    updatedFeatures[index] = { ...feature, description: e.target.value };
                    updateComponent(name, { content: { ...component.content, features: updatedFeatures } });
                  }}
                  placeholder="Feature Description"
                  className={styles.textarea}
                />
                <div className={styles.imageUpload}>
                  <label htmlFor={`featureIcon-${index}`} className={styles.uploadButton}>
                    <Camera size={20} />
                    Upload Icon
                  </label>
                  <input
                    id={`featureIcon-${index}`}
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          const updatedFeatures = [...(component.content.features || [])];
                          updatedFeatures[index] = { ...feature, icon: reader.result as string };
                          updateComponent(name, { content: { ...component.content, features: updatedFeatures } });
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                    className={styles.fileInput}
                  />
                </div>
                {feature.icon && (
                  <img 
                    src={feature.icon} 
                    alt={`${feature.title} icon`} 
                    className={styles.iconPreview}
                  />
                )}
              </div>
            ))}
            <button
              onClick={() => {
                const newFeature = { icon: '', title: '', description: '' };
                const updatedFeatures = [...(component.content.features || []), newFeature];
                updateComponent(name, { content: { ...component.content, features: updatedFeatures } });
              }}
              className={styles.addButton}
            >
              <Plus size={20} /> Add Feature
            </button>
          </div>
        );
      case 'Header':
      case 'Navbar':
        return (
          <div className={styles.controlGroup}>
            <h3>{name}</h3>
            <div className={styles.imageUpload}>
              <label htmlFor={`${name}Logo`} className={styles.uploadButton}>
                <Upload size={20} />
                Upload Logo
              </label>
              <input
                id={`${name}Logo`}
                type="file"
                accept="image/*"
                onChange={handleImageChange(name, 'logo')}
                className={styles.fileInput}
              />
            </div>
            {component.content.logo && (
              <img 
                src={component.content.logo} 
                alt="Logo preview" 
                className={styles.imagePreview}
              />
            )}
            <h4>Navigation Links</h4>
            {component.content.navigationLinks?.map((link, index) => (
              <div key={index} className={styles.linkItem}>
                <input
                  type="text"
                  value={link.text}
                  onChange={(e) => {
                    const updatedLinks = [...(component.content.navigationLinks || [])];
                    updatedLinks[index] = { ...link, text: e.target.value };
                    updateComponent(name, { content: { ...component.content, navigationLinks: updatedLinks } });
                  }}
                  placeholder="Link Text"
                  className={styles.input}
                />
                <input
                  type="text"
                  value={link.href}
                  onChange={(e) => {
                    const updatedLinks = [...(component.content.navigationLinks || [])];
                    updatedLinks[index] = { ...link, href: e.target.value };
                    updateComponent(name, { content: { ...component.content, navigationLinks: updatedLinks } });
                  }}
                  placeholder="Link URL"
                  className={styles.input}
                />
              </div>
            ))}
            <button
              onClick={() => {
                const newLink = { text: '', href: '' };
                const updatedLinks = [...(component.content.navigationLinks || []), newLink];
                updateComponent(name, { content: { ...component.content, navigationLinks: updatedLinks } });
              }}
              className={styles.addButton}
            >
              <Plus size={20} /> Add Link
            </button>
          </div>
        );
      case 'Hero':
        return (
          <div className={styles.controlGroup}>
            <h3>Hero</h3>
            <input
              type="text"
              value={component.content.title || ''}
              onChange={(e) => updateComponent(name, { 
                content: { ...component.content, title: e.target.value } 
              })}
              placeholder="Hero Title"
              className={styles.input}
            />
            <input
              type="text"
              value={component.content.subtitle || ''}
              onChange={(e) => updateComponent(name, { 
                content: { ...component.content, subtitle: e.target.value } 
              })}
              placeholder="Hero Subtitle"
              className={styles.input}
            />
            <input
              type="text"
              value={component.content.buttonText || ''}
              onChange={(e) => updateComponent(name, { 
                content: { ...component.content, buttonText: e.target.value } 
              })}
              placeholder="Button Text"
              className={styles.input}
            />
            <div className={styles.imageUpload}>
              <label htmlFor="heroImage" className={styles.uploadButton}>
                <Upload size={20} />
                Upload Hero Image
              </label>
              <input
                id="heroImage"
                type="file"
                accept="image/*"
                onChange={handleImageChange(name, 'imageSrc')}
                className={styles.fileInput}
              />
            </div>
            {component.content.imageSrc && (
              <img 
                src={component.content.imageSrc} 
                alt="Hero preview" 
                className={styles.imagePreview}
              />
            )}
          </div>
        );
      case 'MostBookedCheckups':
        return (
          <div className={styles.controlGroup}>
            <h3>Most Booked Checkups</h3>
            <input
              type="text"
              value={component.content.title || ''}
              onChange={(e) => updateComponent(name, { 
                content: { ...component.content, title: e.target.value } 
              })}
              placeholder="Section Title"
              className={styles.input}
            />
            <textarea
              value={component.content.description || ''}
              onChange={(e) => updateComponent(name, { 
                content: { ...component.content, description: e.target.value } 
              })}
              placeholder="Section Description"
              className={styles.textarea}
            />
            <input
              type="text"
              value={component.content.viewAllText || ''}
              onChange={(e) => updateComponent(name, { 
                content: { ...component.content, viewAllText: e.target.value } 
              })}
              placeholder="View All Button Text"
              className={styles.input}
            />
            <div className={styles.checkupsContainer}>
              {component.content.checkups?.map((checkup, index) => (
                <div key={index} className={styles.checkupItem}>
                  <input
                    type="text"
                    value={checkup.title}
                    onChange={(e) => {
                      const updatedCheckups = [...(component.content.checkups || [])];
                      updatedCheckups[index] = { ...checkup, title: e.target.value };
                      updateComponent(name, { 
                        content: { ...component.content, checkups: updatedCheckups } 
                      });
                    }}
                    placeholder="Checkup Title"
                    className={styles.input}
                  />
                  <input
                    type="text"
                    value={checkup.color}
                    onChange={(e) => {
                      const updatedCheckups = [...(component.content.checkups || [])];
                      updatedCheckups[index] = { ...checkup, color: e.target.value };
                      updateComponent(name, { 
                        content: { ...component.content, checkups: updatedCheckups } 
                      });
                    }}
                    placeholder="Color (e.g. #FF9900)"
                    className={styles.input}
                  />
                  <div className={styles.imageUpload}>
                    <label htmlFor={`checkupIcon-${index}`} className={styles.uploadButton}>
                      <Camera size={20} />
                      Upload Icon
                    </label>
                    <input
                      id={`checkupIcon-${index}`}
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            const updatedCheckups = [...(component.content.checkups || [])];
                            updatedCheckups[index] = { ...checkup, icon: reader.result as string };
                            updateComponent(name, { 
                              content: { ...component.content, checkups: updatedCheckups } 
                            });
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                      className={styles.fileInput}
                    />
                  </div>
                  {checkup.icon && (
                    <img 
                      src={checkup.icon} 
                      alt={`${checkup.title} icon`} 
                      className={styles.iconPreview}
                    />
                  )}
                  <button
                    onClick={() => {
                      const updatedCheckups = (component.content.checkups || []).filter((_, i) => i !== index);
                      updateComponent(name, { 
                        content: { ...component.content, checkups: updatedCheckups } 
                      });
                    }}
                    className={styles.deleteButton}
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={() => {
                const newCheckup = { title: '', color: '#FFFFFF', icon: '' };
                const updatedCheckups = [...(component.content.checkups || []), newCheckup];
                updateComponent(name, { 
                  content: { ...component.content, checkups: updatedCheckups } 
                });
              }}
              className={styles.addButton}
            >
              <Plus size={20} />
              Add New Checkup
            </button>
          </div>
        );
      case 'HealthMonitoring':
        return (
          <div className={styles.controlGroup}>
            <h3>Health Monitoring</h3>
            <input
              type="text"
              value={component.content.title || ''}
              onChange={(e) => updateComponent(name, { 
                content: { ...component.content, title: e.target.value } 
              })}
              placeholder="Main Title"
              className={styles.input}
            />
            <textarea
              value={component.content.description || ''}
              onChange={(e) => updateComponent(name, { 
                content: { ...component.content, description: e.target.value } 
              })}
              placeholder="Main Description"
              className={styles.textarea}
            />
            <input
              type="text"
              value={component.content.trustedBy || ''}
              onChange={(e) => updateComponent(name, { 
                content: { ...component.content, trustedBy: e.target.value } 
              })}
              placeholder="Main Trusted By"
              className={styles.input}
            />
            <div className={styles.imageUpload}>
              <label htmlFor="healthMonitoringImage" className={styles.uploadButton}>
                <Upload size={20} />
                Upload Main Image
              </label>
              <input
                id="healthMonitoringImage"
                type="file"
                accept="image/*"
                onChange={handleImageChange(name, 'imageSrc')}
                className={styles.fileInput}
              />
            </div>
            {component.content.imageSrc && (
              <img 
                src={component.content.imageSrc} 
                alt="Health Monitoring preview" 
                className={styles.imagePreview}
              />
            )}
            <h4>Cards</h4>
            {component.content.cards?.map((card, index) => (
              <div key={index} className={styles.cardItem}>
                <input
                  type="text"
                  value={card.title || ''}
                  onChange={(e) => {
                    const updatedCards = [...(component.content.cards || [])];
                    updatedCards[index] = { ...card, title: e.target.value };
                    updateComponent(name, { content: { ...component.content, cards: updatedCards } });
                  }}
                  placeholder="Card Title"
                  className={styles.input}
                />
                <input
                  type="number"
                  value={card.originalPrice || 0}
                  onChange={(e) => {
                    const updatedCards = [...(component.content.cards || [])];
                    updatedCards[index] = { ...card, originalPrice: parseFloat(e.target.value) };
                    updateComponent(name, { content: { ...component.content, cards: updatedCards } });
                  }}
                  placeholder="Original Price"
                  className={styles.input}
                />
                <input
                  type="number"
                  value={card.discountedPrice || 0}
                  onChange={(e) => {
                    const updatedCards = [...(component.content.cards || [])];
                    updatedCards[index] = { ...card, discountedPrice: parseFloat(e.target.value) };
                    updateComponent(name, { content: { ...component.content, cards: updatedCards } });
                  }}
                  placeholder="Discounted Price"
                  className={styles.input}
                />
                <input
                  type="text"
                  value={card.discount || ''}
                  onChange={(e) => {
                    const updatedCards = [...(component.content.cards || [])];
                    updatedCards[index] = { ...card, discount: e.target.value };
                    updateComponent(name, { content: { ...component.content, cards: updatedCards } });
                  }}
                  placeholder="Discount"
                  className={styles.input}
                />
                <input
                  type="number"
                  value={card.parameters || 0}
                  onChange={(e) => {
                    const updatedCards = [...(component.content.cards || [])];
                    updatedCards[index] = { ...card, parameters: parseInt(e.target.value) };
                    updateComponent(name, { content: { ...component.content, cards: updatedCards } });
                  }}
                  placeholder="Parameters"
                  className={styles.input}
                />
                <input
                  type="text"
                  value={card.reportDate || ''}
                  onChange={(e) => {
                    const updatedCards = [...(component.content.cards || [])];
                    updatedCards[index] = { ...card, reportDate: e.target.value };
                    updateComponent(name, { content: { ...component.content, cards: updatedCards } });
                  }}
                  placeholder="Report Date"
                  className={styles.input}
                />
                <input
                  type="text"
                  value={card.cardTitle || ''}
                  onChange={(e) => {
                    const updatedCards = [...(component.content.cards || [])];
                    updatedCards[index] = { ...card, cardTitle: e.target.value };
                    updateComponent(name, { content: { ...component.content, cards: updatedCards } });
                  }}
                  placeholder="Card Specific Title"
                  className={styles.input}
                />
                <textarea
                  value={card.cardDescription || ''}
                  onChange={(e) => {
                    const updatedCards = [...(component.content.cards || [])];
                    updatedCards[index] = { ...card, cardDescription: e.target.value };
                    updateComponent(name, { content: { ...component.content, cards: updatedCards } });
                  }}
                  placeholder="Card Specific Description"
                  className={styles.textarea}
                />
                <input
                  type="text"
                  value={card.cardTrustedBy || ''}
                  onChange={(e) => {
                    const updatedCards = [...(component.content.cards || [])];
                    updatedCards[index] = { ...card, cardTrustedBy: e.target.value };
                    updateComponent(name, { content: { ...component.content, cards: updatedCards } });
                  }}
                  placeholder="Card Specific Trusted By"
                  className={styles.input}
                />
                <button
                  onClick={() => {
                    const updatedCards = component.content.cards!.filter((_, i) => i !== index);
                    updateComponent(name, { 
                      content: { ...component.content, cards: updatedCards } 
                    });
                  }}
                  className={styles.deleteButton}
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
            <button
              onClick={() => {
                const newCard: Card = { 
                  title: '', 
                  originalPrice: 0, 
                  discountedPrice: 0, 
                  discount: '', 
                  parameters: 0, 
                  reportDate: '',
                  cardTitle: '',
                  cardDescription: '',
                  cardTrustedBy: ''
                };
                const updatedCards = [...(component.content.cards || []), newCard];
                updateComponent(name, { 
                  content: { ...component.content, cards: updatedCards } 
                });
              }}
              className={styles.addButton}
            >
              <Plus size={20} /> Add Card
            </button>
          </div>
        );
      case 'SearchBar':
        return (
          <div className={styles.controlGroup}>
            <h3>Search Bar</h3>
            <input
              type="text"
              value={component.content.placeholder || ''}
              onChange={(e) => updateComponent(name, { 
                content: { ...component.content, placeholder: e.target.value } 
              })}
              placeholder="Search Bar Placeholder"
              className={styles.input}
            />
          </div>
        );
      default:
        return null;
    }
  };

  const renderPageEditor = (page: Page) => {
    return (
      <div className={styles.pageEditor}>
        <input
          type="text"
          value={page.title}
          onChange={(e) => updatePage(page.route, { title: e.target.value })}
          placeholder="Page Title"
          className={styles.input}
        />
        <input
          type="text"
          value={page.route}
          onChange={(e) => {
            const newRoute = e.target.value;
            updatePage(page.route, { route: newRoute });
            setActivePage(newRoute);
          }}
          placeholder="Page Route (e.g., /blood-test)"
          className={styles.input}
        />
        <textarea
          value={page.description}
          onChange={(e) => updatePage(page.route, { description: e.target.value })}
          placeholder="Test Description"
          className={styles.textarea}
        />
        <textarea
          value={page.testInfo}
          onChange={(e) => updatePage(page.route, { testInfo: e.target.value })}
          placeholder="Test Information"
          className={styles.textarea}
        />
        <input
          type="text"
          value={page.alsoKnownAs}
          onChange={(e) => updatePage(page.route, { alsoKnownAs: e.target.value })}
          placeholder="Also Known As"
          className={styles.input}
        />
        <input
          type="number"
          value={page.price}
          onChange={(e) => updatePage(page.route, { price: parseFloat(e.target.value) })}
          placeholder="Price"
          className={styles.input}
        />
        <input
          type="number"
          value={page.discountedPrice}
          onChange={(e) => updatePage(page.route, { discountedPrice: parseFloat(e.target.value) })}
          placeholder="Discounted Price"
          className={styles.input}
        />
        <input
          type="text"
          value={page.discount}
          onChange={(e) => updatePage(page.route, { discount: e.target.value })}
          placeholder="Discount"
          className={styles.input}
        />
        <input
          type="number"
          value={page.peopleBooked}
          onChange={(e) => updatePage(page.route, { peopleBooked: parseInt(e.target.value) })}
          placeholder="People Booked"
          className={styles.input}
        />
        <input
          type="text"
          value={page.reportsWithin}
          onChange={(e) => updatePage(page.route, { reportsWithin: e.target.value })}
          placeholder="Reports Within"
          className={styles.input}
        />
        <input
          type="number"
          value={page.parameters}
          onChange={(e) => updatePage(page.route, { parameters: parseInt(e.target.value) })}
          placeholder="Parameters"
          className={styles.input}
        />
        <textarea
          value={page.requisites.join('\n')}
          onChange={(e) => updatePage(page.route, { requisites: e.target.value.split('\n') })}
          placeholder="Requisites (one per line)"
          className={styles.textarea}
        />
        <textarea
          value={page.measures}
          onChange={(e) => updatePage(page.route, { measures: e.target.value })}
          placeholder="Measures"
          className={styles.textarea}
        />
        <textarea
          value={page.identifies}
          onChange={(e) => updatePage(page.route, { identifies: e.target.value })}
          placeholder="Identifies"
          className={styles.textarea}
        />
        <textarea
          value={page.testPreparation}
          onChange={(e) => updatePage(page.route, { testPreparation: e.target.value })}
          placeholder="Test Preparation"
          className={styles.textarea}
        />
        <textarea
          value={page.whyThisTest}
          onChange={(e) => updatePage(page.route, { whyThisTest: e.target.value })}
          placeholder="Why This Test"
          className={styles.textarea}
        />
        <textarea
          value={page.interpretations}
          onChange={(e) => updatePage(page.route, { interpretations: e.target.value })}
          placeholder="Interpretations"
          className={styles.textarea}
        />
        <h3>Test Packages</h3>
        {page.packages.map((pkg, index) => (
          <div key={index} className={styles.packageEditor}>
            <input
              type="text"
              value={pkg.name}
              onChange={(e) => {
                const newPackages = [...page.packages];
                newPackages[index] = { ...pkg, name: e.target.value };
                updatePage(page.route, { packages: newPackages });
              }}
              placeholder="Package Name"
              className={styles.input}
            />
            <textarea
              value={pkg.description}
              onChange={(e) => {
                const newPackages = [...page.packages];
                newPackages[index] = { ...pkg, description: e.target.value };
                updatePage(page.route, { packages: newPackages });
              }}
              placeholder="Package Description"
              className={styles.textarea}
            />
            <input
              type="number"
              value={pkg.price}
              onChange={(e) => {
                const newPackages = [...page.packages];
                newPackages[index] = { ...pkg, price: parseFloat(e.target.value) };
                updatePage(page.route, { packages: newPackages });
              }}
              placeholder="Package Price"
              className={styles.input}
            />
            <button
              onClick={() => {
                const newPackages = page.packages.filter((_, i) => i !== index);
                updatePage(page.route, { packages: newPackages });
              }}
              className={styles.deleteButton}
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
        <button
          onClick={() => {
            const newPackage = { name: '', description: '', price: 0 };
            updatePage(page.route, { packages: [...page.packages, newPackage] });
          }}
          className={styles.addButton}
        >
          <Plus size={20} /> Add Package
        </button>
        <h3>FAQs</h3>
        {page.faqs.map((faq, index) => (
          <div key={index} className={styles.faqEditor}>
            <input
              type="text"
              value={faq.question}
              onChange={(e) => {
                const newFaqs = [...page.faqs];
                newFaqs[index] = { ...faq, question: e.target.value };
                updatePage(page.route, { faqs: newFaqs });
              }}
              placeholder="Question"
              className={styles.input}
            />
            <textarea
              value={faq.answer}
              onChange={(e) => {
                const newFaqs = [...page.faqs];
                newFaqs[index] = { ...faq, answer: e.target.value };
                updatePage(page.route, { faqs: newFaqs });
              }}
              placeholder="Answer"
              className={styles.textarea}
            />
            <button
              onClick={() => {
                const newFaqs = page.faqs.filter((_, i) => i !== index);
                updatePage(page.route, { faqs: newFaqs });
              }}
              className={styles.deleteButton}
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
        <button
          onClick={() => {
            const newFaq = { question: '', answer: '' };
            updatePage(page.route, { faqs: [...page.faqs, newFaq] });
          }}
          className={styles.addButton}
        >
          <Plus size={20} /> Add FAQ
        </button>
      </div>
    );
  };

  return (
    <div className={styles.adminPanel}>
      <h2 className={styles.panelTitle}>Admin Panel</h2>
      <div className={styles.tabContainer}>
        <button
          className={`${styles.tabButton} ${activeTab === 'Components' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('Components')}
        >
          Components
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'Pages' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('Pages')}
        >
          Pages
        </button>
      </div>
      {activeTab === 'Components' && (
        <div>
          <div className={styles.componentTabContainer}>
            {Object.keys(components).map((componentName) => (
              <button
                key={componentName}
                className={`${styles.componentTabButton} ${activeComponentTab === componentName ? styles.activeComponentTab : ''}`}
                onClick={() => setActiveComponentTab(componentName)}
              >
                {componentName}
              </button>
            ))}
          </div>
          <div className={styles.componentEditorContainer}>
            {renderComponentControls(activeComponentTab, components[activeComponentTab])}
          </div>
          <div className={styles.visibilityToggle}>
            <label>
              <input
                type="checkbox"
                checked={components[activeComponentTab].visible}
                onChange={(e) => updateComponent(activeComponentTab, { visible: e.target.checked })}
              />
              Visible
            </label>
          </div>
        </div>
      )}
      {activeTab === 'Pages' && (
        <div className={styles.pagesContainer}>
          <div className={styles.pagesList}>
            {Object.values(pages).map((page) => (
              <button
                key={page.route}
                className={`${styles.pageButton} ${activePage === page.route ? styles.activePage : ''}`}
                onClick={() => setActivePage(page.route)}
              >
                {page.title}
              </button>
            ))}
            <button
              onClick={() => {
                const newRoute = `/new-page-${Date.now()}`;
                const newPage: Page = {
                  title: 'New Page',
                  route: newRoute,
                  description: '',
                  testInfo: '',
                  alsoKnownAs: '',
                  price: 0,
                  discountedPrice: 0,
                  discount: '',
                  peopleBooked: 0,
                  reportsWithin: '',
                  parameters: 0,
                  requisites: [],
                  measures: '',
                  identifies: '',
                  testPreparation: '',
                  whyThisTest: '',
                  interpretations: '',
                  packages: [],
                  faqs: [],
                };
                updatePage(newRoute, newPage);
                setActivePage(newRoute);
              }}
              className={styles.addButton}
            >
              <Plus size={20} /> Add New Page
            </button>
          </div>
          <div className={styles.pageEditorContainer}>
            {activePage && pages[activePage] && renderPageEditor(pages[activePage])}
          </div>
        </div>
      )}
      <button onClick={onConfirm} className={styles.confirmButton}>
        Save Changes
      </button>
    </div>
  );
};

export default AdminPanel;