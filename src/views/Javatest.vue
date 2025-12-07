<template>
  <div class="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-8 px-4">
    <div class="max-w-4xl mx-auto">
      
      <!-- Écran de résultats final -->
      <div v-if="testCompleted" class="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
        <div class="text-center mb-8">
          <div class="text-6xl mb-4">{{ gradeIcon }}</div>
          <h2 class="text-4xl font-bold text-gray-900 mb-2">Test terminé !</h2>
          <p :class="`text-2xl font-semibold ${gradeColor} mb-6`">{{ grade }}</p>
        </div>

        <div class="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-8 text-white mb-8">
          <div class="text-center">
            <div class="text-6xl font-bold mb-2">{{ finalPercentage }}%</div>
            <p class="text-xl">Score global</p>
            <p class="text-sm opacity-90 mt-2">{{ score }} / {{ totalQuestions }} réponses correctes</p>
          </div>
        </div>

        <div class="space-y-6 mb-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Détails par niveau</h3>
          
          <div v-for="level in [1, 2, 3]" :key="level" class="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div class="flex items-center justify-between mb-3">
              <h4 class="font-semibold text-gray-900">{{ getLevelData(level).title }}</h4>
              <span class="text-sm font-medium text-gray-600">{{ getLevelScore(level) }}/{{ getLevelTotal(level) }}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3 mb-2">
              <div 
                class="bg-gradient-to-r from-red-500 to-orange-500 h-3 rounded-full transition-all duration-500"
                :style="{ width: getLevelPercentage(level) + '%' }"
              ></div>
            </div>
            <p class="text-sm text-gray-600">{{ getLevelPercentage(level) }}% de réussite</p>
          </div>
        </div>

        <div class="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div class="flex items-start">
            <svg class="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
            </svg>
            <div>
              <h4 class="font-semibold text-blue-900 mb-2">Recommandations</h4>
              <ul class="text-sm text-blue-800 space-y-1">
                <li v-for="(recommendation, index) in recommendations" :key="index">{{ recommendation }}</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="flex gap-4">
          <button
            @click="resetTest"
            class="flex-1 bg-gradient-to-r from-red-600 to-orange-600 text-white py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all flex items-center justify-center gap-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
            Recommencer le test
          </button>
          <a
            :href="shareEmailUrl"
            class="flex-1 bg-gray-100 text-gray-700 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all text-center flex items-center justify-center"
          >
            Partager mon résultat
          </a>
        </div>
      </div>

      <!-- Écran du test -->
      <div v-else>
        <!-- Header -->
        <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h1 class="text-3xl font-bold text-gray-900">Test Java - Évaluation de compétences</h1>
              <p class="text-gray-600 mt-1">{{ currentLevelData.title }}</p>
            </div>
            <div class="text-right">
              <div class="text-2xl font-bold text-red-600">{{ score }}/{{ totalQuestions }}</div>
              <div class="text-sm text-gray-600">Score</div>
            </div>
          </div>

          <!-- Progress bar -->
          <div class="w-full bg-gray-200 rounded-full h-3 mb-2">
            <div 
              class="bg-gradient-to-r from-red-500 to-orange-500 h-3 rounded-full transition-all duration-300"
              :style="{ width: progressPercentage + '%' }"
            ></div>
          </div>
          <div class="flex justify-between text-sm text-gray-600">
            <span>Question {{ answers.length + 1 }} / {{ totalQuestions }}</span>
            <span>{{ progressPercentage }}% complété</span>
          </div>
        </div>

        <!-- Question Card -->
        <div class="bg-white rounded-xl shadow-lg p-8">
          <div class="mb-6">
            <div class="flex items-center gap-2 mb-4">
              <span class="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                Niveau {{ currentLevel }}
              </span>
              <span class="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                Question {{ currentQuestion + 1 }}/{{ currentLevelData.questions.length }}
              </span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ question.question }}</h3>
          </div>

          <!-- Code Display -->
          <div v-if="question.code" class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm mb-6 overflow-x-auto">
            <pre>{{ question.code }}</pre>
          </div>

          <!-- Answer Options - MCQ -->
          <div v-if="question.type === 'mcq'" class="space-y-3">
            <button
              v-for="(option, index) in question.options"
              :key="index"
              @click="handleAnswer(index)"
              :disabled="showResult"
              :class="getOptionClass(index)"
              class="w-full text-left p-4 rounded-lg border-2 transition-all"
            >
              <div class="flex items-center justify-between">
                <span class="font-medium">{{ option }}</span>
                <svg v-if="showResult && index === question.correct" class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <svg v-if="showResult && index === selectedAnswer && index !== question.correct" class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
            </button>
          </div>

          <!-- Answer Input - Completion -->
          <div v-if="question.type === 'completion'">
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Votre réponse :
            </label>
            <input
              type="text"
              v-model="userInput"
              :disabled="showResult"
              placeholder="Tapez votre réponse ici..."
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none disabled:bg-gray-100"
            />
          </div>

          <!-- Answer Input - Error Detection -->
          <div v-if="question.type === 'error'">
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Numéro de la ligne contenant l'erreur :
            </label>
            <input
              type="number"
              v-model="userInput"
              :disabled="showResult"
              placeholder="Ex: 5"
              min="1"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none disabled:bg-gray-100"
            />
          </div>

          <!-- Result Message -->
          <div v-if="showResult" :class="getResultClass()" class="mt-6 p-4 rounded-lg border-2">
            <div class="flex items-start gap-3">
              <svg v-if="lastAnswerCorrect" class="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <svg v-else class="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <p :class="getResultTextClass()" class="font-semibold mb-1">
                  {{ lastAnswerCorrect ? 'Bonne réponse !' : 'Réponse incorrecte' }}
                </p>
                <p class="text-sm text-gray-700">{{ question.explanation }}</p>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="mt-6 flex gap-4">
            <button
              v-if="!showResult"
              @click="checkAnswer"
              :disabled="!canSubmit"
              class="flex-1 bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Vérifier
            </button>
            <button
              v-else
              @click="nextQuestion"
              class="flex-1 bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all flex items-center justify-center gap-2"
            >
              {{ getNextButtonText() }}
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Info Card -->
        <div class="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div class="flex items-start gap-3">
            <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div class="text-sm text-blue-800">
              <p class="font-medium mb-1">Astuce pour ce niveau :</p>
              <p>{{ currentLevelData.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JavaQuizTest',
  data() {
    return {
      currentLevel: 1,
      currentQuestion: 0,
      selectedAnswer: null,
      showResult: false,
      score: 0,
      answers: [],
      testCompleted: false,
      userInput: '',
      selectedQuestions: {}, // Stocke les questions sélectionnées pour chaque niveau
      
      // Pool de questions beaucoup plus grand
      questionPool: {
        level1: {
          title: "Niveau 1 - Fondamentaux Java",
          description: "Questions théoriques sur les bases de Java",
          questions: [
            {
              id: 1,
              type: "mcq",
              question: "Quelle est la méthode principale pour démarrer un programme Java ?",
              code: null,
              options: [
                "public void start()",
                "public static void main(String[] args)",
                "public void main()",
                "static void main(String args)"
              ],
              correct: 1,
              explanation: "La méthode main() doit être public, static, void et accepter String[] args"
            },
            {
              id: 2,
              type: "mcq",
              question: "Quel mot-clé est utilisé pour créer une sous-classe en Java ?",
              code: null,
              options: ["implements", "extends", "inherits", "derives"],
              correct: 1,
              explanation: "Le mot-clé 'extends' est utilisé pour l'héritage de classe"
            },
            {
              id: 3,
              type: "mcq",
              question: "Quelle est la taille d'un type 'int' en Java ?",
              code: null,
              options: ["16 bits", "32 bits", "64 bits", "8 bits"],
              correct: 1,
              explanation: "En Java, le type int occupe 32 bits (4 octets)"
            },
            {
              id: 4,
              type: "mcq",
              question: "Que signifie JVM ?",
              code: null,
              options: [
                "Java Very Machine",
                "Java Virtual Machine",
                "Java Variable Method",
                "Java Version Manager"
              ],
              correct: 1,
              explanation: "JVM = Java Virtual Machine, elle exécute le bytecode Java"
            },
            {
              id: 5,
              type: "mcq",
              question: "Quelle collection n'autorise pas les doublons ?",
              code: null,
              options: ["ArrayList", "LinkedList", "HashSet", "HashMap"],
              correct: 2,
              explanation: "HashSet implémente l'interface Set qui n'autorise pas les doublons"
            },
            {
              id: 6,
              type: "mcq",
              question: "Quelle est la différence entre '==' et '.equals()' en Java ?",
              code: null,
              options: [
                "Rien, ils sont identiques",
                "'==' compare les références, '.equals()' compare le contenu",
                "'==' compare le contenu, '.equals()' compare les références",
                "Ils ne sont pas comparables"
              ],
              correct: 1,
              explanation: "'==' compare les adresses mémoire, '.equals()' compare les valeurs (pour les objets)"
            },
            {
              id: 7,
              type: "mcq",
              question: "Quel est le type de retour du constructeur d'une classe ?",
              code: null,
              options: ["void", "La classe elle-même", "int", "Les constructeurs n'ont pas de type de retour"],
              correct: 3,
              explanation: "Les constructeurs n'ont pas de type de retour, pas même void"
            },
            {
              id: 8,
              type: "mcq",
              question: "Que signifie 'final' lorsqu'il est appliqué à une variable ?",
              code: null,
              options: [
                "La variable ne peut pas être modifiée",
                "La variable est statique",
                "La variable est publique",
                "La variable est optionnelle"
              ],
              correct: 0,
              explanation: "Une variable 'final' ne peut être assignée qu'une seule fois"
            },
            {
              id: 9,
              type: "mcq",
              question: "Quelle est la classe mère de toutes les classes en Java ?",
              code: null,
              options: ["Object", "Class", "Main", "Super"],
              correct: 0,
              explanation: "La classe Object est la racine de la hiérarchie des classes"
            },
            {
              id: 10,
              type: "mcq",
              question: "Quel mot-clé est utilisé pour gérer les exceptions ?",
              code: null,
              options: ["exception", "error", "try-catch", "check"],
              correct: 2,
              explanation: "try-catch-finally est le mécanisme de gestion des exceptions"
            },
            {
              id: 11,
              type: "mcq",
              question: "Quelle est la portée par défaut d'une variable de classe ?",
              code: null,
              options: ["public", "private", "protected", "package-private"],
              correct: 3,
              explanation: "Par défaut, les variables ont une portée package (visible dans le même package)"
            },
            {
              id: 12,
              type: "mcq",
              question: "Quelle interface doit implémenter une classe pour être triée avec Collections.sort() ?",
              code: null,
              options: ["Sortable", "Comparable", "Comparator", "Ordered"],
              correct: 1,
              explanation: "L'interface Comparable permet de définir un ordre naturel"
            },
            {
              id: 13,
              type: "mcq",
              question: "Quel est l'opérateur d'instanceof utilisé pour ?",
              code: null,
              options: [
                "Créer une nouvelle instance",
                "Vérifier le type d'un objet",
                "Comparer deux instances",
                "Convertir un type"
              ],
              correct: 1,
              explanation: "instanceof vérifie si un objet est une instance d'une classe spécifique"
            },
            {
              id: 14,
              type: "mcq",
              question: "Quelle méthode est appelée lors du garbage collection ?",
              code: null,
              options: ["destroy()", "finalize()", "delete()", "cleanup()"],
              correct: 1,
              explanation: "La méthode finalize() est appelée avant que l'objet ne soit récupéré"
            },
            {
              id: 15,
              type: "mcq",
              question: "Que fait le mot-clé 'super' ?",
              code: null,
              options: [
                "Appelle la classe mère",
                "Crée une superclasse",
                "Référence la classe courante",
                "Augmente les performances"
              ],
              correct: 0,
              explanation: "'super' fait référence à la classe parente"
            }
          ]
        },
        level2: {
          title: "Niveau 2 - Complétion de code",
          description: "Complétez les portions de code manquantes",
          questions: [
            {
              id: 1,
              type: "completion",
              question: "Complétez le code pour créer une boucle qui affiche les nombres de 0 à 4 :",
              code: `for (int i = 0; i < 5; i++) {
    System.out.println(___);
}`,
              correct: "i",
              alternatives: ["i", "I", "(i)"],
              explanation: "La variable 'i' doit être affichée dans la boucle"
            },
            {
              id: 2,
              type: "completion",
              question: "Complétez la déclaration de la méthode pour calculer une somme :",
              code: `public ___ calculerSomme(int a, int b) {
    return a + b;
}`,
              correct: "int",
              alternatives: ["int", "Int"],
              explanation: "Le type de retour doit être 'int' car la méthode retourne une somme d'entiers"
            },
            {
              id: 3,
              type: "completion",
              question: "Complétez le constructeur de la classe :",
              code: `public class Personne {
    private String nom;
    
    public Personne(String nom) {
        ___.nom = nom;
    }
}`,
              correct: "this",
              alternatives: ["this", "This"],
              explanation: "'this' fait référence à l'instance courante de la classe"
            },
            {
              id: 4,
              type: "completion",
              question: "Complétez le code pour créer une ArrayList de String :",
              code: `ArrayList<String> liste = new ___<>();`,
              correct: "ArrayList<String>",
              alternatives: ["ArrayList<String>", "ArrayList", "ArrayList<>"],
              explanation: "Le constructeur doit spécifier le type ArrayList<String>"
            },
            {
              id: 5,
              type: "completion",
              question: "Complétez le code pour capturer une exception :",
              code: `try {
    int result = 10 / 0;
} ___ (ArithmeticException e) {
    System.out.println("Division par zéro !");
}`,
              correct: "catch",
              alternatives: ["catch", "Catch"],
              explanation: "Le mot-clé 'catch' est utilisé pour capturer une exception"
            },
            {
              id: 6,
              type: "completion",
              question: "Complétez l'implémentation de l'interface :",
              code: `public interface Animal {
    void faireDuBruit();
}

public class Chien ___ Animal {
    public void faireDuBruit() {
        System.out.println("Wouf!");
    }
}`,
              correct: "implements",
              alternatives: ["implements", "extends", "Implements"],
              explanation: "On utilise 'implements' pour implémenter une interface"
            },
            {
              id: 7,
              type: "completion",
              question: "Complétez la classe abstraite :",
              code: `public ___ class Forme {
    public abstract double calculerAire();
}`,
              correct: "abstract",
              alternatives: ["abstract", "Abstract", "interface"],
              explanation: "Le mot-clé 'abstract' définit une classe abstraite"
            },
            {
              id: 8,
              type: "completion",
              question: "Complétez la méthode pour lire une ligne depuis la console :",
              code: `import java.util.Scanner;

public class Test {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.___();
        scanner.close();
    }
}`,
              correct: "nextLine",
              alternatives: ["nextLine", "readLine", "next", "NextLine"],
              explanation: "La méthode nextLine() lit une ligne complète"
            },
            {
              id: 9,
              type: "completion",
              question: "Complétez le code pour créer un thread :",
              code: `public class MonThread ___ Thread {
    public void run() {
        System.out.println("Thread en cours...");
    }
}`,
              correct: "extends",
              alternatives: ["extends", "implements", "inherits", "Extends"],
              explanation: "On étend la classe Thread pour créer un nouveau thread"
            },
            {
              id: 10,
              type: "completion",
              question: "Complétez le code pour utiliser un HashMap :",
              code: `import java.util.HashMap;

public class Test {
    public static void main(String[] args) {
        HashMap<String, Integer> map = ___ HashMap<>();
        map.put("clé", 123);
    }
}`,
              correct: "new",
              alternatives: ["new", "New", "create", "Create"],
              explanation: "Le mot-clé 'new' est utilisé pour instancier un objet"
            },
            {
              id: 11,
              type: "completion",
              question: "Complétez le code pour convertir une String en int :",
              code: `String nombreTexte = "42";
int nombre = Integer.___(nombreTexte);`,
              correct: "parseInt",
              alternatives: ["parseInt", "ParseInt", "valueOf", "toInt"],
              explanation: "Integer.parseInt() convertit une String en int"
            },
            {
              id: 12,
              type: "completion",
              question: "Complétez le code pour définir une constante :",
              code: `public class Constantes {
    public static ___ int MAX_VALUE = 100;
}`,
              correct: "final",
              alternatives: ["final", "Final", "constant", "static"],
              explanation: "'final' rend une variable constante (non modifiable)"
            },
            {
              id: 13,
              type: "completion",
              question: "Complétez le code pour utiliser une énumération :",
              code: `public ___ Jour {
    LUNDI, MARDI, MERCREDI
}`,
              correct: "enum",
              alternatives: ["enum", "Enum", "class", "interface"],
              explanation: "Le mot-clé 'enum' définit un type d'énumération"
            },
            {
              id: 14,
              type: "completion",
              question: "Complétez le code pour fermer une ressource avec try-with-resources :",
              code: `___ (BufferedReader br = new BufferedReader(new FileReader("fichier.txt"))) {
    String ligne = br.readLine();
}`,
              correct: "try",
              alternatives: ["try", "Try", "with", "using"],
              explanation: "try-with-resources garantit la fermeture des ressources"
            },
            {
              id: 15,
              type: "completion",
              question: "Complétez le code pour créer un tableau :",
              code: `int[] tableau = ___ int[10];`,
              correct: "new",
              alternatives: ["new", "New", "create", "make"],
              explanation: "On utilise 'new' pour créer un tableau avec une taille spécifiée"
            }
          ]
        },
        level3: {
          title: "Niveau 3 - Détection d'erreurs",
          description: "Trouvez la ligne contenant l'erreur (numéro de ligne)",
          questions: [
            {
              id: 1,
              type: "error",
              question: "Quelle ligne contient une erreur ?",
              code: `1: public class Test {
2:     public static void main(String[] args) {
3:         int x = 10;
4:         int y = 0;
5:         int result = x / y;
6:         System.out.println(result);
7:     }
8: }`,
              correct: 5,
              explanation: "Ligne 5 : Division par zéro qui causera une ArithmeticException"
            },
            {
              id: 2,
              type: "error",
              question: "Quelle ligne contient une erreur ?",
              code: `1: public class Animal {
2:     private String nom;
3:     
4:     public Animal(String nom) {
5:         this.nom = nom
6:     }
7: }`,
              correct: 5,
              explanation: "Ligne 5 : Il manque un point-virgule à la fin de l'instruction"
            },
            {
              id: 3,
              type: "error",
              question: "Quelle ligne contient une erreur ?",
              code: `1: public class Calcul {
2:     public static void main(String[] args) {
3:         String texte = "123";
4:         int nombre = Integer.parseInt(texte);
5:         String resultat = nombre + 10;
6:         System.out.println(resultat);
7:     }
8: }`,
              correct: 5,
              explanation: "Ligne 5 : Incompatibilité de types - on ne peut pas assigner un int à une String sans conversion"
            },
            {
              id: 4,
              type: "error",
              question: "Quelle ligne contient une erreur ?",
              code: `1: public class Test {
2:     public void methode1() {
3:         System.out.println("Test");
4:     }
5:     
6:     public static void main(String[] args) {
7:         methode1();
8:     }
9: }`,
              correct: 7,
              explanation: "Ligne 7 : Impossible d'appeler une méthode d'instance depuis une méthode static sans créer d'objet"
            },
            {
              id: 5,
              type: "error",
              question: "Quelle ligne contient une erreur ?",
              code: `1: public class Tableau {
2:     public static void main(String[] args) {
3:         int[] nombres = {1, 2, 3, 4, 5};
4:         for (int i = 0; i <= nombres.length; i++) {
5:             System.out.println(nombres[i]);
6:         }
7:     }
8: }`,
              correct: 4,
              explanation: "Ligne 4 : i <= nombres.length causera un ArrayIndexOutOfBoundsException. Doit être i < nombres.length"
            },
            {
              id: 6,
              type: "error",
              question: "Quelle ligne contient une erreur ?",
              code: `1: public class Boucle {
2:     public static void main(String[] args) {
3:         while (true)
4:             System.out.println("Boucle infinie");
5:             System.out.println("Cette ligne ne s'exécutera jamais");
6:     }
7: }`,
              correct: 5,
              explanation: "Ligne 5 : Sans accolades, seule la première instruction appartient à la boucle while"
            },
            {
              id: 7,
              type: "error",
              question: "Quelle ligne contient une erreur ?",
              code: `1: public class NullTest {
2:     public static void main(String[] args) {
3:         String str = null;
4:         System.out.println(str.length());
5:     }
6: }`,
              correct: 4,
              explanation: "Ligne 4 : NullPointerException car on essaie d'appeler .length() sur null"
            },
            {
              id: 8,
              type: "error",
              question: "Quelle ligne contient une erreur ?",
              code: `1: public class Heritage {
2:     class Parent {
3:         private void method() {}
4:     }
5:     class Child extends Parent {
6:         @Override
7:         public void method() {}
8:     }
9: }`,
              correct: 7,
              explanation: "Ligne 7 : Impossible de redéfinir une méthode privée du parent"
            },
            {
              id: 9,
              type: "error",
              question: "Quelle ligne contient une erreur ?",
              code: `1: public class Cast {
2:     public static void main(String[] args) {
3:         Object obj = "Hello";
4:         Integer num = (Integer) obj;
5:         System.out.println(num);
6:     }
7: }`,
              correct: 4,
              explanation: "Ligne 4 : ClassCastException - on ne peut pas caster une String en Integer"
            },
            {
              id: 10,
              type: "error",
              question: "Quelle ligne contient une erreur ?",
              code: `1: public class Switch {
2:     public static void main(String[] args) {
3:         int x = 2;
4:         switch (x) {
5:             case 1:
6:                 System.out.println("Un");
7:             case 2:
8:                 System.out.println("Deux");
9:             default:
10:                System.out.println("Autre");
11:        }
12:    }
13: }`,
              correct: 11,
              explanation: "Ligne 11 : Il manque 'break' dans les cas, sinon il y aura fall-through"
            },
            {
              id: 11,
              type: "error",
              question: "Quelle ligne contient une erreur ?",
              code: `1: public class InterfaceTest {
2:     interface MonInterface {
3:         void method();
4:     }
5:     
6:     class MaClasse implements MonInterface {
7:         // Pas d'implémentation
8:     }
9: }`,
              correct: 6,
              explanation: "Ligne 6 : MaClasse doit implémenter method() car elle implémente MonInterface"
            },
            {
              id: 12,
              type: "error",
              question: "Quelle ligne contient une erreur ?",
              code: `1: public class Generics {
2:     public static void main(String[] args) {
3:         List<String> list = new ArrayList<String>();
4:         list.add("Hello");
5:         list.add(123);
6:     }
7: }`,
              correct: 5,
              explanation: "Ligne 5 : Type mismatch - on ne peut pas ajouter un Integer à une List<String>"
            },
            {
              id: 13,
              type: "error",
              question: "Quelle ligne contient une erreur ?",
              code: `1: public class StaticTest {
2:     int instanceVar = 10;
3:     
4:     static void staticMethod() {
5:         System.out.println(instanceVar);
6:     }
7: }`,
              correct: 5,
              explanation: "Ligne 5 : Une méthode static ne peut pas accéder à une variable d'instance"
            },
            {
              id: 14,
              type: "error",
              question: "Quelle ligne contient une erreur ?",
              code: `1: public class FinalTest {
2:     public static void main(String[] args) {
3:         final int x = 10;
4:         x = 20;
5:     }
6: }`,
              correct: 4,
              explanation: "Ligne 4 : On ne peut pas modifier une variable final"
            },
            {
              id: 15,
              type: "error",
              question: "Quelle ligne contient une erreur ?",
              code: `1: public class ArrayInit {
2:     public static void main(String[] args) {
3:         int[] arr = new int[5];
4:         arr[5] = 10;
5:     }
6: }`,
              correct: 4,
              explanation: "Ligne 4 : ArrayIndexOutOfBoundsException - les indices vont de 0 à 4"
            }
          ]
        }
      },
      // Configuration du nombre de questions par niveau
      questionsPerLevel: {
        level1: 5,
        level2: 5,
        level3: 5
      }
    }
  },
  computed: {
     shareEmailUrl() {
      const subject = `Résultat Test Java - ${this.finalPercentage}%`;
      
      // Construire le corps du message avec les détails par niveau
      let body = `Bonjour,\n\n`;
      body += `Je viens de terminer le test Java et j'ai obtenu un score de ${this.finalPercentage}%.\n\n`;
      body += `Détails par niveau :\n\n`;
      
      for (let level of [1, 2, 3]) {
        const levelData = this.getLevelData(level);
        const score = this.getLevelScore(level);
        const total = this.getLevelTotal(level);
        const percentage = this.getLevelPercentage(level);
        
        body += `${levelData.title} : ${score}/${total} - ${percentage}%\n`;
      }
      
      body += `\nScore global : ${this.score}/${this.totalQuestions} - ${this.finalPercentage}%\n`;
      body += `Appréciation : ${this.grade}\n\n`;
      body += `---\n`;
      body += `Envoyé depuis l'application de test Java`;
      
      // Encoder les paramètres pour l'URL
      const encodedSubject = encodeURIComponent(subject);
      const encodedBody = encodeURIComponent(body);
      
      return `mailto:7bhilal.chitou7@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
    },
    currentLevelData() {
      const selected = this.selectedQuestions[`level${this.currentLevel}`];
      if (!selected || selected.questions.length === 0) {
        return {
          title: "Niveau en cours",
          description: "Chargement...",
          questions: []
        };
      }
      return {
        title: selected.title,
        description: selected.description,
        questions: selected.questions
      };
    },
    question() {
      if (!this.currentLevelData.questions || this.currentLevelData.questions.length === 0) {
        return {};
      }
      return this.currentLevelData.questions[this.currentQuestion];
    },
    totalQuestions() {
      return Object.values(this.questionsPerLevel).reduce((sum, count) => sum + count, 0);
    },
    // Les autres computed properties restent identiques...
    progressPercentage() {
      return ((this.answers.length / this.totalQuestions) * 100).toFixed(0);
    },
    finalPercentage() {
      return ((this.score / this.totalQuestions) * 100).toFixed(1);
    },
    grade() {
      const percentage = parseFloat(this.finalPercentage);
      if (percentage >= 90) return "Excellent";
      if (percentage >= 75) return "Très bien";
      if (percentage >= 60) return "Bien";
      if (percentage >= 50) return "Passable";
      return "À améliorer";
    },
    gradeColor() {
      const percentage = parseFloat(this.finalPercentage);
      if (percentage >= 90) return "text-green-600";
      if (percentage >= 75) return "text-blue-600";
      if (percentage >= 60) return "text-yellow-600";
      if (percentage >= 50) return "text-orange-600";
      return "text-red-600";
    },
    gradeIcon() {
      const percentage = parseFloat(this.finalPercentage);
      if (percentage >= 90) return "🏆";
      if (percentage >= 75) return "⭐";
      if (percentage >= 60) return "👍";
      if (percentage >= 50) return "📚";
      return "💪";
    },
    recommendations() {
      const percentage = parseFloat(this.finalPercentage);
      if (percentage >= 90) {
        return [
          "• Excellente maîtrise de Java ! Vous êtes prêt pour des projets avancés.",
          "• Explorez Spring Boot et les design patterns."
        ];
      }
      if (percentage >= 75) {
        return [
          "• Très bon niveau ! Continuez à pratiquer avec des projets concrets.",
          "• Révisez les concepts où vous avez eu des difficultés."
        ];
      }
      if (percentage >= 60) {
        return [
          "• Bon niveau de base. Pratiquez davantage avec des exercices.",
          "• Concentrez-vous sur les niveaux 2 et 3."
        ];
      }
      return [
        "• Révisez les fondamentaux de Java (POO, syntaxe de base).",
        "• Pratiquez régulièrement avec des exercices simples.",
        "• Consultez les ressources de formation disponibles."
      ];
    },
    canSubmit() {
      if (!this.question.type) return false;
      
      if (this.question.type === 'mcq') {
        return this.selectedAnswer !== null;
      }
      if (this.question.type === 'error') {
        return this.userInput !== '' && this.userInput !== null;
      }
      return this.userInput.trim() !== '';
    },
    lastAnswerCorrect() {
      return this.answers.length > 0 && this.answers[this.answers.length - 1].correct;
    }
  },
  methods: {
    // Méthode pour sélectionner aléatoirement les questions
    selectRandomQuestions() {
      const selected = {};
      
      for (const level in this.questionPool) {
        const pool = this.questionPool[level];
        const questionsNeeded = this.questionsPerLevel[level];
        
        // Créer une copie du pool de questions
        let availableQuestions = [...pool.questions];
        
        // Sélectionner aléatoirement
        const selectedQuestions = [];
        
        for (let i = 0; i < questionsNeeded && availableQuestions.length > 0; i++) {
          const randomIndex = Math.floor(Math.random() * availableQuestions.length);
          selectedQuestions.push(availableQuestions[randomIndex]);
          
          // Retirer la question sélectionnée pour éviter les doublons
          availableQuestions.splice(randomIndex, 1);
        }
        
        selected[level] = {
          title: pool.title,
          description: pool.description,
          questions: selectedQuestions
        };
      }
      
      this.selectedQuestions = selected;
    },
    
    handleAnswer(answer) {
      this.selectedAnswer = answer;
    },
    
    checkAnswer() {
      let isCorrect = false;

      if (this.question.type === "mcq") {
        isCorrect = this.selectedAnswer === this.question.correct;
      } else if (this.question.type === "completion") {
        isCorrect = this.question.alternatives.some(alt => 
          this.userInput.trim().toLowerCase() === alt.toLowerCase()
        );
      } else if (this.question.type === "error") {
        isCorrect = parseInt(this.userInput) === this.question.correct;
      }

      this.answers.push({
        level: this.currentLevel,
        question: this.currentQuestion,
        correct: isCorrect
      });

      if (isCorrect) {
        this.score++;
      }

      this.showResult = true;
    },
    
    nextQuestion() {
      if (this.currentQuestion < this.currentLevelData.questions.length - 1) {
        this.currentQuestion++;
        this.selectedAnswer = null;
        this.userInput = '';
        this.showResult = false;
      } else if (this.currentLevel < 3) {
        this.currentLevel++;
        this.currentQuestion = 0;
        this.selectedAnswer = null;
        this.userInput = '';
        this.showResult = false;
      } else {
        this.testCompleted = true;
      }
    },
    
    resetTest() {
      // Réinitialiser toutes les données
      this.currentLevel = 1;
      this.currentQuestion = 0;
      this.selectedAnswer = null;
      this.showResult = false;
      this.score = 0;
      this.answers = [];
      this.testCompleted = false;
      this.userInput = '';
      
      // Sélectionner de nouvelles questions aléatoires
      this.selectRandomQuestions();
    },
    
    getOptionClass(index) {
      if (!this.showResult) {
        if (this.selectedAnswer === index) {
          return 'border-red-500 bg-red-50';
        }
        return 'border-gray-200 hover:border-red-300 hover:bg-gray-50';
      }
      
      if (index === this.question.correct) {
        return 'border-green-500 bg-green-50';
      }
      if (index === this.selectedAnswer) {
        return 'border-red-500 bg-red-50';
      }
      return 'border-gray-200 bg-gray-50';
    },
    
    getResultClass() {
      return this.lastAnswerCorrect 
        ? 'bg-green-50 border-green-200' 
        : 'bg-red-50 border-red-200';
    },
    
    getResultTextClass() {
      return this.lastAnswerCorrect 
        ? 'text-green-900' 
        : 'text-red-900';
    },
    
    getNextButtonText() {
      if (this.currentQuestion < this.currentLevelData.questions.length - 1) {
        return 'Question suivante';
      }
      if (this.currentLevel < 3) {
        return 'Niveau suivant';
      }
      return 'Voir les résultats';
    },
    
    getLevelData(level) {
      return this.selectedQuestions[`level${level}`] || this.questionPool[`level${level}`];
    },
    
    getLevelScore(level) {
      const levelAnswers = this.answers.filter(a => a.level === level);
      return levelAnswers.filter(a => a.correct).length;
    },
    
    getLevelTotal(level) {
      return this.questionsPerLevel[`level${level}`];
    },
    
    getLevelPercentage(level) {
      const score = this.getLevelScore(level);
      const total = this.getLevelTotal(level);
      return total > 0 ? ((score / total) * 100).toFixed(0) : 0;
    }
  },
  created() {
    // Sélectionner aléatoirement les questions au chargement
    this.selectRandomQuestions();
  }
}

</script>

<style scoped>
/* Les styles restent identiques */
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}

button:disabled {
  cursor: not-allowed;
}

input:focus {
  outline: none;
}
</style>