import { Locale } from '@/i18n-config';

export interface Dictionary {
  metadata: {
    title: string;
    description: string;
  };
  blogs: {
    'adhesive-wheel-weights-production': {
      blogListTitle: string;
      blogListDescription: string;
      title: string;
      description: string;
      rotaryPunchAdvantages: string;
      rotaryPunchAdvantagesList: string[];
      comprehensiveProductionLine: {
        title: string;
        description: string;
      }
    },
    meta: {
      title: string;
      description: string;
    }
  };
  menu: {
    home: string;
    products: string;
    technology: string;
    questions: string;
    about: string;
    contact: string;
    websites: string;
    blog: string;
    getQuote: string;
    rotaryPunchTechnology: string;
    cableSupportSystems: string;
    corporateWebsite: string;
    language: string;
    choppingAndMarkingMachine: string;
    tapingAndPackagingMachine: string;
    wireFlatteningMachine: string;
    decoilerMachine: string;
    wheelWeights: string;
  };
  hero: {
    tag: string;
    title: string;
    description: string;
    watchPlaylist: string;
    calculateROI: string;
    stats: {
      production: string;
      efficiency: string;
      accuracy: string;
      material: string;
      experience: string;
    };
  };
  machines: {
    decoiler: {
      hero: {
        tag: string;
        title: string;
        description: string;
      };
      specifications: {
        title: string;
        description: string;
        standardProductRange: string;
        wheelWeightSeries: string;
        standard: {
          models: string;
          capacityRange: string;
          stripWidth: string;
          maxOuterDiameter: string;
          innerDiameterRange: string;
          driveSystem: string;
          maxSpeed: string;
          powerRange: string;
          mechanicalHydraulic: string;
        };
        wheel: {
          models: string;
          capacityRange: string;
          stripWidth: string;
          maxOuterDiameter: string;
          innerDiameterRange: string;
          driveSystem: string;
          maxSpeed: string;
          powerRange: string;
          mechanicalHydraulic: string;
        };
      };
      description: {
        tag: string;
        title: string;
        intro: string;
        features: {
          title: string;
          description: string;
        };
        series: {
          title: string;
          light: string;
          medium: string;
          heavy: string;
        };
        standard: {
          title: string;
          description: string;
        };
        applications: {
          title: string;
          description: string;
        };
      };
       meta: {
        title: string;
        description: string;
        keywords: string[];
      }
    };
    taping: {
      hero: {
        tag: string;
        title: string;
        description: string;
      };
      specifications: {
        title: string;
        subtitle: string;
        intro: string;
        machine: {
          dimensions: string;
          dimensionsValue: string;
          application: string;
          applicationValue: string;
          capacity: string;
          capacityValue: string;
          weight: string;
          weightValue: string;
          energy: string;
          energyValue: string;
          control: string;
          controlValue: string;
          packaging: string;
          packagingValue: string;
        }
      };
      description: {
        tag: string;
        title: string;
        intro: string;
        system: {
          title: string;
          description: string;
        };
        features: {
          title: string;
          list: {
            config: string;
            control: string;
            monitoring: string;
            quality: string;
            integration: string;
            energy: string;
          }
        };
        production: {
          title: string;
          description: string;
        };
        integration: {
          title: string;
          description: string;
        };
        benefits: {
          title: string;
          list: {
            productivity: string;
            quality: string;
            flexibility: string;
            packaging: string;
            operation: string;
            performance: string;
          }
        };
      };
      meta: {
        title: string;
        description: string;
        keywords: string;
      }
    };
    rotaryPunch: any;
    wire: any;
    chopping: any;
  };
  components: {
    hero: any;
    productCards: any;
    quoteDialog: {
      title: string;
      description: string;
      name: string;
      namePlaceholder: string; 
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
    };
    contactDialog: {
      successTitle: string;
      successMessage: string;
      errorTitle: string;
      errorMessage: string;
    };
  };
  pages: {
    home: {
      meta: {
        title: string;
        description: string;
      };
      production: {
        tag: string;
        title: string;
        subtitle: string;
        learnMore: string;
      };
      tech: {
        tag: string;
        title: string;
        subtitle: string;
        speed: {
          title: string;
          description: string;
        };
        energy: {
          title: string;
          description: string;
        };
        quality: {
          title: string;
          description: string;
        };
        space: {
          title: string;
          description: string;
        };
      };
    };
    wheelWeights: any;
    faq: {
      title: string;
      tag: string;
      subtitle: string;
      view_all_faqs_button: string;
      meta: {
        title: string;
        description: string;
        keywords: string[];
      };
    };
    about: any;
  };
  company: {
    about_us: {
      meta: {
        title: string;
        description: string;
        keywords: string[];
      };
    };
  };
  quote: {
    button: string;
  };
  footer: {
    allRightsReserved: string;
    privacyPolicy: string;
    terms: string;
  };
  sections: {
    productSpecifications: string;
    keyFeatures: string;
    productDescription: string;
  };
}
